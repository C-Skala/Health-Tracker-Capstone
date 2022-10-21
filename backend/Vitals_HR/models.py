from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Heart_Rate(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    heart_rate= models.IntegerField(default = None)
    date = models.DateField(auto_now=False, auto_now_add=False, default = None)
    time = models.TimeField(auto_now=False, auto_now_add=False)
    comments = models.TextField (max_length=999)
