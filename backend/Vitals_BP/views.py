from django.shortcuts import render
from django import views
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Blood_Pressure
from .serializers import BloodPressureSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def BP_list(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = BloodPressureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        BP = Blood_Pressure.objects.filter(user_id=request.user.id)
        serializer = BloodPressureSerializer(BP, many=True)
        return Response(serializer.data)
            
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def BP_detail(request, pk):
    BPs = get_object_or_404(Blood_Pressure, pk=pk)
    if request.method == 'GET':
        serializer = BloodPressureSerializer(BPs)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = BloodPressureSerializer(BPs, data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        BPs.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)
