# FROM python:3.11-alpine
FROM iad.ocir.io/idrnu3akjpv5/python:3.11-alpine
RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev\
    && apk add --no-cache mysql-dev \
    && apk add --no-cache openssh \
    && apk add --no-cache graphviz

COPY firebird_config /root/.firebird

WORKDIR /usr/src/app
COPY src ./

RUN pip install --no-cache-dir -r requirements.txt
RUN apk del build-deps

ENV PYTHONPATH=/usr/src/app

CMD ["/bin/sleep", "infinity"]
