from django.contrib import admin
from .models import *

# Register your models here.
# class StageAdmin(admin.ModelAdmin):
#     list_display = (
#         "name_stage", 
#         "work_id", 
#         "execution_time", 
#         "priority"
#         "machine"
#     )
admin.site.register(Stage)