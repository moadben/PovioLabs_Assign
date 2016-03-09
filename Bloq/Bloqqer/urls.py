from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^$', 'Bloqqer.views.index'),
    url(r'^createPost/$', 'Bloqqer.views.createPost'),
    url(r'^(?P<post_id>\d+)/$', 'Bloqqer.views.post'),
    url(r'^api/$', views.PostList.as_view()),
    url(r'^api/(?P<pk>[0-9]+)/$', views.PostDetail.as_view()),
]


urlpatterns = format_suffix_patterns(urlpatterns)