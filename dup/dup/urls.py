from django.contrib import admin
from django.urls import path, include
from schedule import views
from schedule.views import *
from rest_framework import routers
# from django.conf import settings

router1 = routers.DefaultRouter()
router2 = routers.DefaultRouter()
router2.register("", MachineView, basename='machineview')
router1.register("", StageView, basename='stageview')


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', ReactView.as_view(), name="react"),
    path('stage/', include((router1.urls, 'stageview'))),
    path('machine/', include((router2.urls, 'machineview'))),
]
