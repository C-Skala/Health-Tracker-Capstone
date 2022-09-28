from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Food(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=99)
    calories = models.IntegerField(max_digits = 5)
    carbohydrates = models.IntegerField(max_digits = 5)
    sugar = models.IntegerField(max_digits = 5)
    sodium = models.IntegerField(max_digits = 5)
    servings = models.IntegerField(max_digits = 2)
    comments = models.TextField (max_length=999)
