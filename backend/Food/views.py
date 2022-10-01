from django.shortcuts import render
from django import views
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Food
from .serializers import FoodSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def food_list(request):
   
   
    if request.method == 'GET':
        foods = Food.objects.all()
        serializer = FoodSerializer(foods, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FoodSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
            
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def food_detail(request, pk):
    foods = get_object_or_404(Food, pk=pk)
    if request.method == 'GET':
        serializer = FoodSerializer(foods)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = FoodSerializer(foods, data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        foods.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)
