from django.shortcuts import render
from django import views
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Blood_Sugar
from .serializers import BloodSugarSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def BS_list(request):
   
   
    if request.method == 'GET':
        sugars = Blood_Sugar.objects.all()
        serializer = BloodSugarSerializer(sugars, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BloodSugarSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
            
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def BS_detail(request, pk):
    sugars = get_object_or_404(Blood_Sugar, pk=pk)
    if request.method == 'GET':
        serializer = BloodSugarSerializer(sugars)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = BloodSugarSerializer(sugars, data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        sugars.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)
