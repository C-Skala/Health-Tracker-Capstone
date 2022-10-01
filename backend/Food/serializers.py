from rest_framework import serializers
from .models import Food

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['id', 'name', 'calories', 'carbohydrates', 'sugar', 'sodium', 'servings', 'comments', 'user_id']
        depth = 1
