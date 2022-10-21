from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from django import views
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from Vitals_BP.serializers import BloodPressureSerializer
from Vitals_BP.models import Blood_Pressure
from Vitals_BS.serializers import BloodSugarSerializer
from Vitals_BS.models import Blood_Sugar
from Vitals_HR.serializers import HeartRateSerializer
from Vitals_HR.models import Heart_Rate
from Vitals_Weight.serializers import WeightSerializer
from Vitals_Weight.models import Weight




# Create your views here.


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def HR_list(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        HR = Heart_Rate.objects.filter(user_id=request.user.id)
        serializer = HeartRateSerializer(HR, many=True)
        return Response(serializer.data)
        