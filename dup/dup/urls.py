from django.contrib import admin
from django.urls import path, include
from schedule import views
from schedule.views import *
from rest_framework import routers
# from django.conf import settings

router = routers.DefaultRouter()
router.register(r'stages', views.StageView, 'stage')


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', ReactView.as_view(), name="react"),
    path('schedule/', include(router.urls))
]
