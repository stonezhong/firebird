#!/bin/sh

docker build --progress=plain -t firebird-console .
docker tag firebird-console iad.ocir.io/idrnu3akjpv5/firebird-console
docker push iad.ocir.io/idrnu3akjpv5/firebird-console