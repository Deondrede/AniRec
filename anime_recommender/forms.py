from django import forms
from .models import User
import datetime

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'
