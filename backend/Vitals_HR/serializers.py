from rest_framework import serializers
from .models import Heart_Rate

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Heart_Rate
        fields = ['id', 'heart_rate', 'comments', 'user_id']
        depth = 1
