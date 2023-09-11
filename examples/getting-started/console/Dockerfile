# FROM python:3.11-alpine
FROM iad.ocir.io/idrnu3akjpv5/python:3.11-alpine
RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev\
    && apk add --no-cache mysql-dev \
    && apk add --no-cache openssh \
    && apk add --no-cache graphviz

WORKDIR /usr/src/app
COPY src ./

RUN pip config set global.disable-pip-version-check true
RUN pip install pip setuptools --upgrade
RUN pip install --no-cache-dir -r requirements.txt
RUN apk del build-deps

ENV PYTHONPATH=/usr/src/app
ENV KUBECONFIG=/root/.kube/config
ENV PYTHONWARNINGS="ignore:Python 3.6 is no longer supported"

CMD ["/bin/sleep", "infinity"]
