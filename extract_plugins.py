#!/usr/bin/env python3
"""Extract (file, developer, plugin, url, host) rows from js_files/*.js.

The files are JS object literals with a consistent layout: app-level keys sit
at 8 spaces of indent, and nested crawl config sits deeper. Reading by indent
therefore skips crawl URLs and commented-out lines without needing a JS runtime.
"""
import csv
import re
import sys
from pathlib import Path
from urllib.parse import urlsplit

SKIP = {'index.js', 'vocab.js'}  # db plumbing, not plugin lists

STR = r"""(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")"""
APP_KEY = re.compile(rf"^ {{8}}(name|developer|url):\s*{STR}")
APP_DEVS = re.compile(rf"^ {{8}}developers:\s*\[\s*{STR}")
FILE_DEV = re.compile(rf"^ {{4}}(?:name|developer):\s*{STR}")
FILE_URL = re.compile(rf"^ {{4}}url:\s*{STR}")
APP_START = re.compile(r"^ {4}\{\s*$")
APP_END = re.compile(r"^ {4}\},?\s*$")


def value(match):
    return (match.group(match.lastindex) or '').replace("\\'", "'")


def parse(path):
    file_dev, file_url, app, apps = None, None, None, []
    in_apps = False
    for line in path.read_text(encoding='utf-8').splitlines():
        if re.match(r"^(const apps\s*=\s*\[|export default \[)", line):
            in_apps = True
        elif not in_apps and file_dev is None and (m := FILE_DEV.match(line)):
            file_dev = value(m)
        elif not in_apps and file_url is None and (m := FILE_URL.match(line)):
            file_url = value(m)
        elif in_apps and APP_START.match(line):
            app = {}
        elif in_apps and app is not None and APP_END.match(line):
            apps.append(app)
            app = None
        elif app is not None and (m := APP_KEY.match(line)):
            app.setdefault(m.group(1), value(m))
        elif app is not None and (m := APP_DEVS.match(line)):
            # Multi-developer entries list the lead developer/brand first
            app.setdefault('developer', value(m))
    return file_dev, file_url, apps


def main(src, out):
    with open(out, 'w', newline='', encoding='utf-8') as fh:
        writer = csv.writer(fh)
        writer.writerow(['file', 'developer', 'plugin', 'url', 'host'])
        for path in sorted(Path(src).glob('*.js')):
            if path.name in SKIP:
                continue
            file_dev, file_url, apps = parse(path)
            if not apps:
                print(f'WARNING: no apps parsed from {path.name}', file=sys.stderr)
            for app in apps:
                developer = app.get('developer') or file_dev
                url = app.get('url') or file_url or ''
                host = (urlsplit(url).hostname or '').lower()
                if not developer or not host:
                    print(f'WARNING: {path.name}: incomplete {app}', file=sys.stderr)
                writer.writerow([path.name, developer, app.get('name'), url, host])


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
