from django.contrib import admin
from django.urls import path, include
from schedule import views
from schedule.views import *
from rest_framework import routers
# from django.conf import settings

routerStage = routers.DefaultRouter()
routerMachine = routers.DefaultRouter()
routerWork = routers.DefaultRouter()

routerStage.register("", StageView, basename='stageview')
routerMachine.register("", MachineView, basename='machineview')
routerWork.register("", WorkView, basename="workview")


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', ReactView.as_view(), name="react"),
    path('stage/', include((routerStage.urls, 'stageview'))),
    path('machine/', include((routerMachine.urls, 'machineview'))),
    path('work/', include((routerWork.urls, 'workview'))),
]
