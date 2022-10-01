from rest_framework import serializers
from .models import Blood_Sugar

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class BloodSugarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blood_Sugar
        fields = ['id', 'sugar', 'comments', 'user_id']
        depth = 1
