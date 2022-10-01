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
   
   
    if request.method == 'GET':
        weights = Weight.objects.all()
        serializer = WeightSerializer(weights, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = WeightSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
            
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
