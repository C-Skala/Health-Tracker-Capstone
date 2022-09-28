from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Medications(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=99)
    strength = models.IntegerField(max_digits = 5)
    class_of_medication = models.TextField (max_length=999)
    time_taking1 = models.TimeField (auto_now=False, auto_now_add=False)
    time_taking2 = models.TimeField (auto_now=False, auto_now_add=False)
    time_taking3 = models.TimeField (auto_now=False, auto_now_add=False)
    time_taking4 = models.TimeField (auto_now=False, auto_now_add=False)
    comments = models.TextField (max_length=999)
