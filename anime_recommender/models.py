from django.db import models
from django.db.models.fields import EmailField

# Create your models here.
class User(models.Model):
    name = models.CharField(blank=True,max_length=255)
    password = models.CharField(blank=True,max_length=30)
        

def __str__(self):
    return self.name