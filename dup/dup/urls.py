from django.contrib import admin
from django.urls import path, include
from schedule import views
from schedule.views import *
from rest_framework import routers
# from django.conf import settings

router = routers.DefaultRouter()
router.register("", StageView, basename='stageview')


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', ReactView.as_view(), name="react"),
    path('api/', include(router.urls))
]
