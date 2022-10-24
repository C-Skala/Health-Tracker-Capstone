from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Food(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=99, default = None )
    calories = models.IntegerField(default = None )
    carbohydrates = models.IntegerField(default = None )
    sugar = models.IntegerField(default = None )
    sodium = models.IntegerField(default = None )
    servings = models.IntegerField(default = None )
    date = models.DateField(auto_now=False, auto_now_add=False, default = None )
    comments = models.TextField (max_length=999,default = None )

