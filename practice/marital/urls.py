from django.conf.urls import url 
from django.urls import path
from . import views 
 
urlpatterns = [ 
    url(r'^api/marital$', views.maritalList),
    url(r'^api/marital/(?P<pk>[0-9]+)$', views.maritalDetail),

    url(r'^api/religion$', views.religions),
    url(r'^api/religion/(?P<pk>[0-9]+)$', views.religion),

    url(r'^api/dukcapil$', views.dukcapils),
    url(r'^api/dukcapil/(?P<pk>[0-9]+)/$', views.dukcapil),

    # url(r'^api/dukcapil/(?P<NIK>.+)/$', views.dukcapil),

    path('', views.frontEnd, name= "home"),
]