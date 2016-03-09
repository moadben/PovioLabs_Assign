from django.conf.urls import include, url
from django.contrib import admin
from django.template import loader


urlpatterns = [
    url(r'^bloq/', include('Bloqqer.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^accounts/login/$', 'Bloq.views.login'),
    url(r'^accounts/auth/$', 'Bloq.views.auth_view'),
    url(r'^accounts/logout/$', 'Bloq.views.logout'),
    url(r'^accounts/loggedin/$', 'Bloq.views.loggedin'),
    url(r'^accounts/invalid/$', 'Bloq.views.invalid_login'),
    url(r'^accounts/register/$', 'Bloq.views.register_user'),
     url(r'^accounts/register_success/$', 'Bloq.views.register_success'),
]