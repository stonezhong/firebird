#!/bin/sh

rm -f /tmp/firebird.tar.gz
tar -czf /tmp/firebird.tar.gz \
    --verbose \
    --exclude=.git \
    --exclude=dist \
    --exclude=build \
    --exclude=src/pyfirebird.egg-info \
    --exclude=src/firebirdconsole/node_modules \
    --exclude=*/__pycache__ \
    --exclude=.gitignore \
    -C /home/stonezhong/DATA_DISK/projects/firebird .

~/.venvs/ocicli/bin/oci os object put -bn debug --file /tmp/firebird.tar.gz --force
