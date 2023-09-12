# Index
* [Install](#install)
* [Environment Variables](#environment-variables)
    * [CONSOLE_URI_BASE](#console_uri_base)
    * [CSRF_TRUSTED_ORIGINS](#csrf_trusted_origins)
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
# Environment Variables
## CONSOLE_URI_BASE
    firebird console will read this variable and assuming this is the base url for firebird console. It is commonly used if you put firebird console behind a reverse proxy under certain path.

```bash
# Example
export CONSOLE_URI_BASE=/streaming/console
```

## CSRF_TRUSTED_ORIGINS
    It firebird console uses SSL, you need to specify the domain so HTTP post request won't be rejected due to CRRF trust issue.

```bash
# Example
export CSRF_TRUSTED_ORIGINS=https://myserver.com
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
