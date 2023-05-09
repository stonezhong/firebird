from django.urls import path
from . import views
from .views import apis

urlpatterns = [
    path('', views.home, name='home'),
    path('apis/list_pipelines', apis.list_pipelines, name='api.list_pipelines'),
]
