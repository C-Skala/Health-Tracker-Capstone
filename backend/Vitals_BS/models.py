from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Blood_Sugar(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sugar= models.IntegerField()
    comments = models.TextField (max_length=999)
