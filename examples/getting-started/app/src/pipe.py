from typing import Any
from firebird import Pipeline, RabbitMQ, Generator, Sink, Node, RabbitMQ
import time
import os

class MyGenerator(Generator):
    def pump(self, quit_requested):
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

def get_pipeline(mq:RabbitMQ):
    pipeline_id = "test"

    pipeline = Pipeline(id=pipeline_id, title="Sample Pipeline", description="This is a sample firebird pipeline", mq=mq)
    src = MyGenerator(id="src", pipeline=pipeline, title="Generate numbers", description="Generate numbers")
    calc = Square(id="calc", pipeline=pipeline, title="Calculate square", description="output = input*input")
    end = MySink(id="end", pipeline = pipeline, title="Display calculation result", description="Display calculation result!")
    src >> calc >> end
    return pipeline
