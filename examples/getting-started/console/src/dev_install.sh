#!/bin/sh

mkdir -p ~/firebird_src
cd ~/firebird_src
rm -rf pkg
mkdir pkg
oci os object get  -bn debug --name firebird.tar.gz --file firebird.tar.gz
cd pkg
tar -xzf ../firebird.tar.gz
pip install -e .
