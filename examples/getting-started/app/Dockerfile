# FROM python:3.11-alpine
FROM python:3.11-alpine
RUN apk add --no-cache openssh

COPY firebird_config /root/.firebird
COPY ssh_config /root/.ssh
RUN chmod 700 /root/.ssh
RUN chmod -R 600 /root/.ssh/*

WORKDIR /usr/src/app
COPY src ./

RUN pip install --no-cache-dir -r requirements.txt

ENV PYTHONPATH=/usr/src/app

# RUN adduser --disabled-password \
#     -u 1000 -g 1000  \
#     --home /home/opc \
#     opc

# COPY --chown=1000:1000 ssh_config /home/opc/.ssh
# COPY --chown=1000:1000 firebird_config /home/opc/.firebird

# # WORKDIR /usr/src/app
# WORKDIR /mnt/DATA_DISK/mordor/apps/pulse-streaming/current

# RUN pip config set global.disable-pip-version-check true
# COPY pip.conf /root/.pip/pip.conf


# USER 1000

# COPY . .

CMD ["/bin/sleep", "infinity"]