from django.db import models
from django.db.models.fields import CharField, Field
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class User(models.Model):
    username = CharField(max_length=30)
    password = CharField(max_length=30,default="")
    preferred_genres = ArrayField(CharField(max_length=20,null=True),null=True)
    watched_anime = ArrayField(CharField(max_length=50,null=True),null=True)


#Potential userform to be used later, copy below and place in forms.py
# from django.forms.models import model_to_dict
# from .models import User

# class UserForm(forms.ModelForm):
#     password = forms.CharField(widget=forms.PasswordInput)
#     class Meta:
#         model = User