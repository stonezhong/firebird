from typing import Optional
import os
from django.http import JsonResponse
from django.http  import HttpRequest, HttpResponse
from django.conf import settings
from firebird import zkdb
import tempfile
import xml.dom.minidom
import graphviz
from django.core.exceptions import BadRequest

class RESTAPIBase:
    def list(self, request:HttpRequest, **kwargs):
        # returns JSON object
        raise BadRequest('LIST is not supported')

    def get(self, request:HttpRequest, id:str, **kwargs):
        # returns JSON object
        raise BadRequest('GET is not supported')

    def update(self, request:HttpRequest, id:str, partial:bool=False, **kwargs):
        # returns JSON object
        raise BadRequest('UPDATE is not supported')
    
    def create(self, request:HttpRequest, **kwargs):
        # returns JSON object
        raise BadRequest('CREATE is not supported')

    def delete(self, request:HttpRequest, id:str, **kwargs):
        # returns JSON object
        raise BadRequest('DELETE is not supported')

    def __call__(self, request:HttpRequest, id:Optional[str]=None, **kwargs):
        resp_json = None
        if request.method == "GET":
            if id is None:
                resp_json = self.list(request, **kwargs)
            else:
                resp_json = self.get(request, id, **kwargs)
        elif request.method == "PUT":
            resp_json = self.update(request, id, partial=False, **kwargs)
        elif request.method == "PATCH":
            resp_json = self.update(request, id, partial=True, **kwargs)
        elif request.method == "POST":
            resp_json = self.create(request, **kwargs)
        elif request.method == "DELETE":
            resp_json = self.delete(request, id, **kwargs)
        else:
            raise BadRequest(f'{request.method} is not recognized')
        return JsonResponse(resp_json)    

class PipelinesAPI(RESTAPIBase):
    def list(self, request:HttpRequest, **kwargs):
        with zkdb(**settings.FIREBIRD_CONFIG['zookeeper']) as db:
            pipelines = db.get_pipelines()
        return {"pipelines": pipelines}

    def get(self, request:HttpRequest, id:str, **kwargs):
        with zkdb(**settings.FIREBIRD_CONFIG['zookeeper']) as db:
            error, pipeline = db.get_pipeline(id)

        filename = None
        svg_filename = None
        with tempfile.NamedTemporaryFile(prefix="firebird-svg-", delete=False) as f:
            filename = f.name
            svg_filename = f"{filename}.svg"

        svgs = []
        for rankdir in ["LR", "TB"]:
            try:
                edges = set()
                g = graphviz.Digraph(format="svg")
                g.attr(bgcolor="transparent")
                g.attr(rankdir=rankdir)
                for node in pipeline["info"]["nodes"]:
                    g.node(node['id'], node['title'], shape="box", href="#", style="filled", fillcolor="green")

                    for port in node["ports"]:
                        if port["type"] == "OUTPUT":
                            for connected_port in port["connected_ports"]:
                                next_node_id, _ = connected_port.split(":")
                                edges.add((node["id"], next_node_id))
                for src_node_id, next_node_id in edges:
                    g.edge(src_node_id, next_node_id)
                g.render(filename=filename)

                doc = xml.dom.minidom.parse(svg_filename)
                svg = doc.documentElement.toxml()
                svgs.append(svg)
            finally:
                for fn in [filename, svg_filename]:
                    if os.path.isfile(fn):
                        os.remove(fn)

        return {
            "pipeline": pipeline,
            "svg_lr": svgs[0],
            "svg_tb": svgs[1],
        }

