from django.db import models
from django.db.models.fields import CharField, Field, IntegerField
from jsonfield import JSONField

# Create your models here.
class User(models.Model):
    username = CharField(max_length=30)
    password = CharField(max_length=30,default="",)
    preferred_genres = CharField(max_length=20,null=True)
    watched_anime = CharField(max_length=200,null=True)
    recommendations = JSONField(max_length=200,null=True)
    try_this = JSONField(max_length=200,null=True)

class Review(models.Model):
    anime_id = IntegerField()
    username = CharField(max_length=30)
    review = CharField(max_length=5000)
