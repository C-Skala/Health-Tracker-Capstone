from rest_framework import serializers
from .models import Medications

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class MedicationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medications
        fields = ['id', 'name', 'strength', 'class_of_medication', 'time_taking1', 'time_taking2', 'time_taking3', 'time_taking4', 'comments', 'user_id']
        depth = 1
