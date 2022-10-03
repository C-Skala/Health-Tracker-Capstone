from rest_framework import serializers
from .models import Blood_Pressure

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class BloodPressureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blood_Pressure
        fields = ['id', 'systolic', 'diastolic','date', 'time', 'comments', 'user_id']
        depth = 1
