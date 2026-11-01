#!/usr/bin/env python3
"""List recently added plugins from developers worth featuring.

A plugin qualifies when it was added in the last month and its developer either
has a Tranco rank or already had a plugin in the dataset before 2026, which lets
long-standing small developers through. Reads plugin_ranking.csv and prints CSV.
"""
import argparse
import calendar
import collections
import csv
import sys
from datetime import date

FIELDS = ['created', 'plugin', 'developer', 'qualifies_by', 'tranco_rank',
          'developer_first_added', 'plugins_before_cutoff', 'unranked_reason', 'url']


def months_before(day, months):
    """The same day of the month `months` earlier, clamped to that month's length."""
    index = day.year * 12 + day.month - 1 - months
    year, month = index // 12, index % 12 + 1
    return date(year, month, min(day.day, calendar.monthrange(year, month)[1]))


def qualification(row, prior_count):
    reasons = []
    if row['tranco_rank']:
        reasons.append('tranco_rank')
    if prior_count:
        reasons.append('established')
    return '+'.join(reasons)


def featured(rows, since, until, established_before):
    dated = [row for row in rows if row['created']]  # ISO dates compare as strings
    first_added = {}
    prior_counts = collections.Counter()
    for row in dated:
        developer = row['developer']
        first_added[developer] = min(row['created'], first_added.get(developer, row['created']))
        if row['created'] < established_before:
            prior_counts[developer] += 1

    results = []
    for row in dated:
        prior_count = prior_counts[row['developer']]
        qualifies_by = qualification(row, prior_count)
        if since <= row['created'] <= until and qualifies_by:
            results.append({
                **row,
                'qualifies_by': qualifies_by,
                'developer_first_added': first_added[row['developer']],
                'plugins_before_cutoff': prior_count,
            })
    results.sort(key=lambda r: (r['developer'].lower(), r['plugin'].lower()))
    results.sort(key=lambda r: r['created'], reverse=True)
    return results


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--csv', default='plugin_ranking.csv', help='input file')
    parser.add_argument('--months', type=int, default=1, help='length of the recent window')
    parser.add_argument('--as-of', type=date.fromisoformat, default=date.today(),
                        help='end of the recent window, YYYY-MM-DD (default: today)')
    parser.add_argument('--established-before', type=date.fromisoformat, default=date(2026, 1, 1),
                        help='a developer with a plugin added before this date is established')
    args = parser.parse_args()

    with open(args.csv, newline='', encoding='utf-8') as fh:
        rows = list(csv.DictReader(fh))
    if rows and 'created' not in rows[0]:
        sys.exit(f'{args.csv} has no created column; run sync_created_dates.py first')

    since = months_before(args.as_of, args.months)
    results = featured(rows, since.isoformat(), args.as_of.isoformat(), args.established_before.isoformat())

    writer = csv.DictWriter(sys.stdout, fieldnames=FIELDS, extrasaction='ignore', lineterminator='\n')
    writer.writeheader()
    writer.writerows(results)
    print(f'{len(results)} plugins added {since} to {args.as_of}', file=sys.stderr)


if __name__ == '__main__':
    main()
