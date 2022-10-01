from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Blood_Pressure(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    systolic= models.IntegerField()
    diastolic = models.IntegerField()
    comments = models.TextField (max_length=999)
