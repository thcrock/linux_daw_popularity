#!/usr/bin/env python3
"""Rank plugin developers by the Tranco rank of their plugin URL's domain.

Reads plugins.csv (from extract_plugins.py), looks each registrable domain up
through the Tranco API (cached in tranco_ranks.json), and writes
developer_ranking.csv.
"""
import collections
import csv
import json
import time
import urllib.error
import urllib.request
from pathlib import Path

PSL = '/usr/share/publicsuffix/public_suffix_list.dat'
API = 'https://tranco-list.eu/api/ranks/domain/'
CACHE = Path('tranco_ranks.json')
DELAY = 1.1  # the API allows roughly one request per second

# Domains whose rank reflects the platform, not the developer hosted on it
SHARED = {
    'bandcamp.com', 'blogspot.com', 'buymeacoffee.com', 'codeberg.org',
    'github.com', 'github.io', 'gitlab.com', 'gitlab.io', 'google.com',
    'gumroad.com', 'itch.io', 'ko-fi.com', 'kvraudio.com', 'lemonsqueezy.com',
    'nekoweb.org', 'note.com', 'pages.dev', 'patreon.com', 'sourceforge.io',
    'steampowered.com', 'web.app', 'wordpress.com',
}
# Academic or research hosts, ranked but flagged: traffic is mostly unrelated
INSTITUTION = {'ircam.fr', 'notam02.no', 'unimi.it'}


def load_icann_suffixes():
    rules, in_icann = set(), False
    for line in open(PSL, encoding='utf-8'):
        line = line.strip()
        if 'BEGIN ICANN DOMAINS' in line:
            in_icann = True
        elif 'END ICANN DOMAINS' in line:
            break
        elif in_icann and line and not line.startswith('//'):
            rules.add(line)
    return rules


def registrable(host, rules):
    """eTLD+1 using ICANN suffixes only, matching how Tranco aggregates:
    it lists github.io but not foo.github.io."""
    labels = host.split('.')
    for i in range(len(labels)):
        candidate = '.'.join(labels[i:])
        wildcard = '*.' + '.'.join(labels[i + 1:])
        if '!' + candidate in rules:
            return candidate
        if candidate in rules:
            return '.'.join(labels[max(i - 1, 0):])
        if wildcard in rules:
            return '.'.join(labels[max(i - 1, 0):])
    return '.'.join(labels[-2:])


def fetch_rank(domain):
    for attempt in range(6):
        try:
            with urllib.request.urlopen(API + domain, timeout=30) as resp:
                return json.load(resp).get('ranks', [])
        except urllib.error.HTTPError as err:
            if err.code != 429 and err.code < 500:
                raise
        except (urllib.error.URLError, TimeoutError):
            pass
        time.sleep(5 * (attempt + 1))
    raise RuntimeError(f'lookup failed for {domain}')


def lookup_all(domains):
    cache = json.loads(CACHE.read_text()) if CACHE.exists() else {}
    for n, domain in enumerate(sorted(domains), 1):
        if domain in cache:
            continue
        ranks = fetch_rank(domain)
        latest = max(ranks, key=lambda r: r['date']) if ranks else None
        cache[domain] = {'rank': latest['rank'], 'date': latest['date']} if latest else None
        CACHE.write_text(json.dumps(cache, indent=1, sort_keys=True))
        print(f'{n}/{len(domains)} {domain}: {cache[domain]}', flush=True)
        time.sleep(DELAY)
    return cache


def main():
    rules = load_icann_suffixes()
    rows = list(csv.DictReader(open('plugins.csv', encoding='utf-8')))
    devs = collections.defaultdict(lambda: {'plugins': 0, 'files': set(), 'domains': collections.Counter()})
    for row in rows:
        dev = devs[row['developer']]
        dev['plugins'] += 1
        dev['files'].add(row['file'])
        dev['domains'][registrable(row['host'], rules)] += 1

    cache = lookup_all({d for dev in devs.values() for d in dev['domains']})
    rank_of = lambda d: (cache[d] or {}).get('rank')

    out = []
    for name, dev in devs.items():
        own = [d for d in dev['domains'] if d not in SHARED]
        pool = own or list(dev['domains'])
        # Best-ranked domain wins; plugin count breaks ties among unranked ones
        best = min(pool, key=lambda d: (rank_of(d) or float('inf'), -dev['domains'][d]))
        category = 'institution' if best in INSTITUTION else 'own' if own else 'shared'
        out.append({
            'developer': name,
            'domain': best,
            'tranco_rank': rank_of(best) or '',
            'category': category,
            'plugins': dev['plugins'],
            'other_domains': ' '.join(sorted(set(dev['domains']) - {best})),
            'files': ' '.join(sorted(dev['files'])),
        })

    order = {'own': 0, 'institution': 0, 'shared': 1}
    out.sort(key=lambda r: (order[r['category']], r['tranco_rank'] == '', r['tranco_rank'] or 0, r['developer'].lower()))

    position, seen = 0, {}
    for row in out:
        if row['category'] == 'shared' or row['tranco_rank'] == '':
            row['position'] = ''
            continue
        position += 1
        # Developers on the same domain share a position
        row['position'] = seen.setdefault(row['domain'], position)

    fields = ['position', 'developer', 'domain', 'tranco_rank', 'category', 'plugins', 'other_domains', 'files']
    with open('developer_ranking.csv', 'w', newline='', encoding='utf-8') as fh:
        writer = csv.DictWriter(fh, fieldnames=fields)
        writer.writeheader()
        writer.writerows(out)
    print(f'wrote {len(out)} developers')
    write_plugin_ranking(rows, out)


def write_plugin_ranking(plugins, developers):
    """One row per plugin, carrying its developer's ranking and, when there is
    no position, the reason. Rows follow the developer ranking order."""
    order = {dev['developer']: i for i, dev in enumerate(developers)}
    by_name = {dev['developer']: dev for dev in developers}
    fields = ['position', 'plugin', 'developer', 'domain', 'tranco_rank', 'category',
              'unranked_reason', 'shared_platform_rank', 'url', 'file']
    with open('plugin_ranking.csv', 'w', newline='', encoding='utf-8') as fh:
        writer = csv.DictWriter(fh, fieldnames=fields)
        writer.writeheader()
        for row in sorted(plugins, key=lambda r: (order[r['developer']], r['plugin'].lower())):
            dev = by_name[row['developer']]
            shared = dev['category'] == 'shared'
            reason = 'shared_domain' if shared else 'not_in_tranco' if dev['tranco_rank'] == '' else ''
            writer.writerow({
                'position': dev['position'],
                'plugin': row['plugin'],
                'developer': row['developer'],
                'domain': dev['domain'],
                # A shared host's rank measures the platform, so it stays out of tranco_rank
                'tranco_rank': '' if shared else dev['tranco_rank'],
                'category': dev['category'],
                'unranked_reason': reason,
                'shared_platform_rank': dev['tranco_rank'] if shared else '',
                'url': row['url'],
                'file': row['file'],
            })
    print(f'wrote {len(plugins)} plugins')


if __name__ == '__main__':
    main()
