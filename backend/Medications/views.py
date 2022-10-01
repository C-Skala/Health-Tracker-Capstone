from django.shortcuts import render
from django import views
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Medications
from .serializers import MedicationsSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def Med_list(request):
   
   
    if request.method == 'GET':
        meds = Medications.objects.all()
        serializer = MedicationsSerializer(meds, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MedicationsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
            
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def Med_detail(request, pk):
    meds = get_object_or_404(Medications, pk=pk)
    if request.method == 'GET':
        serializer = MedicationsSerializer (Medications)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = MedicationsSerializer(meds, data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        meds.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)
