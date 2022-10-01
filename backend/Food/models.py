from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Food(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=99)
    calories = models.IntegerField()
    carbohydrates = models.IntegerField()
    sugar = models.IntegerField()
    sodium = models.IntegerField()
    servings = models.IntegerField()
    comments = models.TextField (max_length=999)
