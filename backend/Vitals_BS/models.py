from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Blood_Sugar(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sugar= models.IntegerField()
    date = models.DateField(auto_now=False, auto_now_add=False)
    time = models.TimeField(auto_now=False, auto_now_add=False)
    comments = models.TextField (max_length=999)
