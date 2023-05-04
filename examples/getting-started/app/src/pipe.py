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
    def on_message(self, name:str, data:Any):
        print(f"{self.id}: {data}")

class Square(Node):
    def on_message(self, name:str, data:Any):
        self.emit(data*data)

def get_pipeline(mq:RabbitMQ):
    pipeline_id = "test"

    pipeline = Pipeline(id=pipeline_id, mq=mq)
    src = MyGenerator(id="src", pipeline=pipeline)
    calc = Square(id="calc", pipeline=pipeline)
    end = MySink(id="end", pipeline = pipeline)
    src >> calc >> end
    return pipeline
