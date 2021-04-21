from django.db import models
from django.db.models.fields import CharField, Field, IntegerField
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class User(models.Model):
    username = CharField(max_length=30)
    password = CharField(max_length=30,default="",)
    preferred_genres = CharField(max_length=20,null=True)
    watched_anime = CharField(max_length=50,null=True)


class Review(models.Model):
    anime_id = IntegerField()
    username = CharField(max_length=30)
    review = CharField(max_length=5000)