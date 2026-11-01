#!/usr/bin/env python3
"""Sync each plugin's `created` date from js_files/*.js into plugin_ranking.csv.

Offline by design: this only reads the JS files and rewrites the one column, so
rankings are left alone and Tranco is never queried. Safe to re-run. Run it again
after rank_developers.py, which rewrites plugin_ranking.csv without this column.
"""
import csv
import os
import re
import sys
from pathlib import Path

from extract_plugins import APP_END, APP_START, SKIP, STR, value

NAME = re.compile(rf"^ {{8}}name:\s*{STR}")
APP_CREATED = re.compile(rf"^ {{8}}created:\s*{STR}")
FILE_CREATED = re.compile(rf"^ {{4}}created:\s*{STR}")


def read_created(path):
    """Map plugin name to created date, falling back to the file's `common` date."""
    file_created, app, dates = None, None, {}
    in_apps = False
    for line in path.read_text(encoding='utf-8').splitlines():
        if re.match(r"^(const apps\s*=\s*\[|export default \[)", line):
            in_apps = True
        elif not in_apps and (m := FILE_CREATED.match(line)):
            file_created = value(m)
        elif in_apps and APP_START.match(line):
            app = {}
        elif in_apps and app is not None and APP_END.match(line):
            dates[app['name']] = (app.get('created') or file_created or '').strip()
            app = None
        elif app is not None and (m := NAME.match(line)):
            app.setdefault('name', value(m))
        elif app is not None and (m := APP_CREATED.match(line)):
            app.setdefault('created', value(m))
    return dates


def main(src, target):
    dates = {path.name: read_created(path) for path in Path(src).glob('*.js') if path.name not in SKIP}

    with open(target, newline='', encoding='utf-8') as fh:
        reader = csv.DictReader(fh)
        fields = list(reader.fieldnames)
        rows = list(reader)
    if 'created' not in fields:
        fields.append('created')

    missing = []
    for row in rows:
        created = dates.get(row['file'], {}).get(row['plugin'])
        if created is None:
            sys.exit(f"no JS entry for {row['plugin']!r} in {row['file']}; plugin_ranking.csv left unchanged")
        row['created'] = created
        if not created:
            missing.append(f"{row['file']}: {row['plugin']}")

    tmp = f'{target}.tmp'
    with open(tmp, 'w', newline='', encoding='utf-8') as fh:
        writer = csv.DictWriter(fh, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)
    os.replace(tmp, target)

    print(f'synced {len(rows)} plugins, {len(missing)} without a created date')
    for entry in missing:
        print(f'  {entry}')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
