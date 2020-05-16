from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token


urlpatterns = [
    # path('', views.StudentSignupListCreate.as_view() ),
    # url('loginapp/(?P<pk>\d+)/$', views.StudentSignupListPut.as_view({'get': 'retrieve', 'put': 'update'}),name='edit_loginapp'),
    url(r'^auth-jwt/', obtain_jwt_token),
    url(r'^auth-jwt-refresh/', refresh_jwt_token),
    url(r'^auth-jwt-verify/', verify_jwt_token),
]