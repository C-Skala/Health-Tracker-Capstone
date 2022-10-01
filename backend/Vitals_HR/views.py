from django.shortcuts import render
from django import views
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Heart_Rate
from .serializers import HeartRateSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def HR_list(request):
   
   
    if request.method == 'GET':
        HRs = Heart_Rate.objects.all()
        serializer = HeartRateSerializer(HRs, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = HeartRateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
            
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def HR_detail(request, pk):
    HRs = get_object_or_404(Heart_Rate, pk=pk)
    if request.method == 'GET':
        serializer = HeartRateSerializer(HRs)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = HeartRateSerializer(HRs, data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        HRs.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)
