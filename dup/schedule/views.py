from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from . models import *
from .serializers import *
from rest_framework.response import Response
from .logic import logic_schedule

# Create your views here.
class ReactView(APIView):
    def get(self, request): 
       output = [
            {
                "employee": output.employee,
                "department": output.department
            } for output in React.objects.all()
        ]
       return Response(output)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        

class StageView(viewsets.ModelViewSet):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer
    logic_schedule(queryset)


class MachineView(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer
    
