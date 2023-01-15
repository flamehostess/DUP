from django.urls import path
# from django.contrib import admin
# from .views import *

from . import views

urlpatterns = [
    path('', views.home, name = "home"),
    path('register/', views.login, name = "register")
]
