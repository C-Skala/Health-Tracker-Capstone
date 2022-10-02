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
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = BloodSugarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        BS = Blood_Sugar.objects.filter(user_id=request.user.id)
        serializer = BloodSugarSerializer(BS, many=True)
        return Response(serializer.data)
            
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
