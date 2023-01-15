from django.urls import path, re_path
# from django.contrib import admin
# from .views import *

from . import views

app_name = 'pages'
urlpatterns = [
    path('', views.my_first_simple_view, name = "pages"), 
    path('<int:post_id>/', views.detail, name = "detail"), 
    path('<int:post_id>/leave_comment/', views.leave_comment, name = "leave_comment"), 
    re_path('^archive/(?P<year>[0-9]{4})/', views.archive),
    path('123', views.my_second_simple_view),
   ]
