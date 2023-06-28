#!/bin/sh

docker build -t firebird-app1 .
docker tag firebird-app1 iad.ocir.io/idrnu3akjpv5/firebird-app1
docker push iad.ocir.io/idrnu3akjpv5/firebird-app1