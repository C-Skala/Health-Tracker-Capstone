from rest_framework import serializers
from .models import Weight

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class WeightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weight
        fields = ['id', 'weight', 'date', 'comments', 'user_id']
        depth = 1
