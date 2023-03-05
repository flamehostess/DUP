from rest_framework import serializers
from .models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['employee', 'department']


class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model: Stage
        fields = [
            'name_stage',
            'work_id',
            'execution_time',
            'priority'
            'machine'
        ]