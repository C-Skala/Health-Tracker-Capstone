from django.shortcuts import render
from django import views
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Weight
from .serializers import WeightSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def Weight_list(request):
   
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = WeightSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        weight = Weight.objects.filter(user_id=request.user.id)
        serializer = WeightSerializer(weight, many=True)
        return Response(serializer.data)
            
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def Weight_detail(request, pk):
    weights = get_object_or_404(Weight, pk=pk)
    if request.method == 'GET':
        serializer = WeightSerializer(weights)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = WeightSerializer(weights, data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        weights.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)
