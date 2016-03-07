from django.conf.urls import include, url
from django.contrib import admin
from django.template import loader


urlpatterns = [
    url(r'^bloq/', include('Bloqqer.urls')),
    url(r'^admin/', admin.site.urls),
]