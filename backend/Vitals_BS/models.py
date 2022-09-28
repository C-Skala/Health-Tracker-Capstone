from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Food(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sugar= models.IntegerField(max_digits = 3)
    comments = models.TextField (max_length=999)
