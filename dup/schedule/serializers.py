from rest_framework import serializers
from .models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['employee', 'department']


class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        # fields = '__all__'
        fields = [
            'id',
            'name_stage',
            'work_id',
            'execution_time',
            'priority',
            'machine'
        ]

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = [
            'id',
            'name_machine',
            'description'
        ]

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = [
            'id',
            'name_work',
            'release_dates',
            'due_dates'
        ]