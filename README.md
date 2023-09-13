# Index
* [Install](#install)
* [Firebird Console](#firebird-console)
    * [Configurations](#configurations)
        * [`~/.firebird/config`](#firebirdconfig)
        * [`~/.kube/config`](#kubeconfig)
        * [`~/.oci/config`](#ociconfig)
    * [Environment Variables](#environment-variables)
        * [`CONSOLE_URI_BASE`](#console_uri_base)
        * [`CSRF_TRUSTED_ORIGINS`](#csrf_trusted_origins)
    * [Initialize Firebird Console Database](#initialize-firebird-console-database)
    * [Start Firebird Console](#start-firebird-console)
* [Common Commands](#common-commands)
    * [Register Pipeline](#register-a-pipeline)
    * [Unregister a Pipeline](#unregister-a-pipeline)
    * [Start a Pipeline](#start-a-pipeline)
    * [Stop a Pipeline](#stop-a-pipeline)
    * [List Pipelines](#list-pipelines)

# Install
```bash
pip install pyfirebird
```

# Firebird Console
    It provides a Web UI for pipeline management.
## Configurations
### `~/.firebird/config`
    This file contains configuration for mysql, rabbitmq and zookeeper. Here is an example:
```
{
    "zookeeper": {
        "hosts":     "zookeeper:2181"
    },
    "rabbitmq": {
        "username":  "stonezhong",
        "password":  "changeme",
        "host":      "rabbitmq",
        "port":      5672,
        "heartbeat": 300
    },
    "mysql": {
        "db_name":  "firebird",
        "username": "stonezhong",
        "password": "changeme",
        "server":   "10.2.0.29"
    }
}
```
### `~/.kube/config`
    This is your kubernete config file. Firebird Console need to talk to kubernete clsuter to start, stop pipelines.

### `~/.oci/config`
    This is needed if you are using Kubernete in Oracle Cloud Infrastructure. It is your oci config file. You may also need the key file referenced by this config file.


## Environment Variables
### `CONSOLE_URI_BASE`
    firebird console will read this variable and assuming this is the base url for firebird console. It is commonly used if you put firebird console behind a reverse proxy under certain path.

```bash
# Example
export CONSOLE_URI_BASE=/streaming/console
```

### `CSRF_TRUSTED_ORIGINS`
    It firebird console uses SSL, you need to specify the domain so HTTP post request won't be rejected due to CRRF trust issue.

```bash
# Example
export CSRF_TRUSTED_ORIGINS=https://myserver.com
```

## Initialize Firebird Console Database
```bash
fbconsole migrate
```

## Start Firebird Console
```bash
fbconsole runserver <ip>:<port>
# Example:
fbconsole runserver 0.0.0.0:8000

# You can access firebird console at $CONSOLE_URI_BASE/ui/
```

# Common commands
## Register a Pipeline
```bash
pipeline register \
    --pipeline-module-name <pipeline name> \
    --pipeline-namespace-name <pipeline namespace name> \
    --pipeline-image-name <pipeline image name>

# example
pipeline register \
    --pipeline-module-name pipe \
    --pipeline-namespace-name firebird \
    --pipeline-image-name iad.ocir.io/idrnu3akjpv5/firebird-app1
```

## Unregister a Pipeline
```bash
pipeline unregister -pid <pipeline name>
```

## Start a Pipeline
```bash
pipeline start -pid <pipeline name>
```

## Stop a Pipeline
```bash
pipeline stop -pid <pipeline name>
```

## List Pipelines
```bash
pipeline list
```
