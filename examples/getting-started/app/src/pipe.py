from typing import Any
from firebird import Pipeline, RabbitMQ, Generator, Sink, Node, RabbitMQ
import time

class MyGenerator(Generator):
    def pump(self, quit_requested):
        i = 0
        while not quit_requested.value:
            self.emit(i)
            i += 1
            time.sleep(1)

class MySink(Sink):
    def on_message(self, port_id:str, data:Any):
        print(f"{self.id}: {data}")

class Square(Node):
    def on_message(self, port_id:str, data:Any):
        self.emit(data*data)

def get_pipeline(mq:RabbitMQ):
    pipeline_id = "test"

    pipeline = Pipeline(id=pipeline_id, title="Sample Pipeline", description="This is a sample firebird pipeline", mq=mq)
    src = MyGenerator(id="src", pipeline=pipeline, title="Generate numbers", description="Generate numbers")
    calc = Square(id="calc", pipeline=pipeline, title="Calculate square", description="output = input*input")
    end = MySink(id="end", pipeline = pipeline, title="Display calculation result", description="Display calculation result!")
    src >> calc >> end
    return pipeline
