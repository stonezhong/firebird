from django.http import JsonResponse
from django.http  import HttpRequest, HttpResponse
from django.conf import settings
from firebird import zkdb

def list_pipelines(request:HttpRequest)->HttpResponse:
    with zkdb(**settings.FIREBIRD_CONFIG['zookeeper']) as db:
        pipelines = db.get_pipelines()
    return JsonResponse({
        "pipelines": pipelines
    })
