# FROM python:3.11-alpine
FROM iad.ocir.io/idrnu3akjpv5/python:3.11-alpine
RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev\
    && apk add --no-cache mysql-dev \
    && apk add --no-cache openssh \
    && apk add --no-cache graphviz

COPY configs/firebird_config /root/.firebird
COPY configs/oci /root/.oci
COPY configs/kube /root/.kube

RUN chmod -R 600 /root/.oci/config
RUN chmod -R 600 /root/.oci/oci_api_key.pem

WORKDIR /usr/src/app
COPY src ./

RUN pip install --no-cache-dir -r requirements.txt
RUN apk del build-deps

ENV PYTHONPATH=/usr/src/app
ENV KUBECONFIG=/root/.kube/config

CMD ["/bin/sleep", "infinity"]
