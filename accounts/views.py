from accounts.models import User
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from django.core import serializers
from django.http import HttpResponse


def createUser(request):
    if request.method == "POST":
        print(request.POST)
        username = request.POST.get('username')
        password = request.POST.get('password')
        User.objects.create(username=username,password=password)

def index(request):
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')