from typing import Any, List, Tuple, Optional
from firebird import Pipeline, RabbitMQ, Generator, Sink, Node, RabbitMQ, StartupResource, ShutdownResource
import time
import os
from multiprocessing.sharedctypes import Synchronized

class MyGenerator(Generator):
    def pump(self, quit_requested: Synchronized, count:Optional[int]=None):
        # assuming volume checkpoint is mounted at /checkpoint
        next_number = 0
        if os.path.isfile("/checkpoint/state"):
            with open("/checkpoint/state", "rt") as f:
                next_number = int(f.read())

        while not quit_requested.value:
            self.emit(next_number)
            print(f"{self.id}: {next_number}")
            next_number += 1
            time.sleep(1)
        
        with open("/checkpoint/state", "wt") as f:
            f.write(f"{next_number}")

class MySink(Sink):
    def on_message(self, port_id:str, data:Any):
        print(f"{self.id}: {data}")

class Square(Node):
    def on_message(self, port_id:str, data:Any):
        print(f"{self.id}: {data} -> {data*data}")
        self.emit(data*data)

def _get_puller_yaml(resource_name:str):
    return \
f"""
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {resource_name}
  namespace: {{{{namespace_name}}}}
  labels:
    app: firebird-stream-executor
    role: puller
    pipeline: {{{{pipeline_id}}}}
spec:
  replicas: {{{{replicas}}}}
  selector:
    matchLabels:
      app: firebird-stream-executor
      role: puller
      pipeline: {{{{pipeline_id}}}}
  template:
    metadata:
      labels:
        app: firebird-stream-executor
        role: puller
        pipeline: {{{{pipeline_id}}}}
    spec:
      containers:
      - name: main
        image: {{{{image_name}}}}
        command:
          - python
          - '-u'
        args:
          - /usr/local/lib/python3.11/site-packages/firebird/cmd_tools/executor.py
          - '-pid'
          - '{{{{pipeline_id}}}}'
"""    

def _get_generator_yaml(generator_id:str, resource_name:str):
  return \
f"""
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: {resource_name}
  namespace: {{{{namespace_name}}}}
  labels:
    app: firebird-stream-executor
    role: generator
    pipeline: {{{{pipeline_id}}}}
    generator: {generator_id}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: firebird-stream-executor
      role: generator
      pipeline: {{{{pipeline_id}}}}
      generator: {generator_id}
  template:
    metadata:
      labels:
        app: firebird-stream-executor
        role: generator
        pipeline: {{{{pipeline_id}}}}
        generator: {generator_id}
    spec:
      containers:
      - name: main
        image: {{{{image_name}}}}
        command:
          - python
          - '-u'
        args:
          - /usr/local/lib/python3.11/site-packages/firebird/cmd_tools/executor.py
          - '-pid'
          - '{{{{pipeline_id}}}}'
          - '-gid'
          - '{generator_id}'
        volumeMounts:
          - name: checkpoint
            mountPath: /checkpoint
  volumeClaimTemplates:
    - metadata:
        name: checkpoint
      spec:
        accessModes: [ "ReadWriteOnce" ]
        resources:
          requests:
            storage: 20Mi
"""

class MyPipeline(Pipeline):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def get_resources(self) -> Tuple[List[StartupResource], List[ShutdownResource]]:
        src_name    = "91e6cd19-9343-4d4a-9b4b-1e91cf9b175b"
        puller_name = "65e0afba-f42f-4e66-8dce-6edc0a441b84"

        return [
            StartupResource(title="Generator src", yaml=_get_generator_yaml("src", src_name)),
            StartupResource(title="Puller", yaml=_get_puller_yaml(puller_name)),
          ], [
              ShutdownResource(type="Statefulset", name=src_name),
              ShutdownResource(type="Deployment",  name=puller_name),
          ]

def get_pipeline(mq:RabbitMQ):
    pipeline_id = "test"

    pipeline = MyPipeline(id=pipeline_id, title="Sample Pipeline", description="This is a sample firebird pipeline", mq=mq)
    src = MyGenerator(id="src", pipeline=pipeline, title="Generate numbers", description="Generate numbers")
    calc = Square(id="calc", pipeline=pipeline, title="Calculate square", description="output = input*input")
    end = MySink(id="end", pipeline = pipeline, title="Display calculation result", description="Display calculation result!")
    src >> calc >> end
    return pipeline
