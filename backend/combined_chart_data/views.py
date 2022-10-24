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


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Chart_List(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        hr = Heart_Rate.objects.filter(user_id=request.user.id)
        serializerHR = HeartRateSerializer(hr, many=True)
        


        bp = Blood_Pressure.objects.filter(user_id = request.user.id)
        serializerBP = BloodPressureSerializer(bp, many= True)
        


        bs = Blood_Sugar.objects.filter(user_id = request.user.id)
        serializerBS = BloodSugarSerializer(bs, many= True)
        


        weight = Weight.objects.filter(user_id = request.user.id)
        serializerWeight = WeightSerializer(weight, many= True)
        
        
        

        custom_chart_dictionary={'BP':serializerBP.data, 
                                "BS":serializerBS.data, 
                                "HR":serializerHR.data, 
                                "weight":serializerWeight.data}

        return Response(custom_chart_dictionary)
        