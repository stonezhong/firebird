# common commands
```bash
# docker infra
docker-compose -f infra/docker-compose.yaml build
# start rabbitmq and zookeeper
docker-compose -f infra/docker-compose.yaml up -d
# shutdown rabbitmq and zookeeper
docker-compose -f infra/docker-compose.yaml down

# build application docker
docker-compose -f app/docker-compose.yaml build
docker-compose -f app/docker-compose.yaml up -d
docker-compose -f app/docker-compose.yaml down


```