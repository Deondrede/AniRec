from accounts.models import User
from django.contrib.auth.forms import UserCreationForm
from django.core import serializers
from django.http import HttpResponse


def createUser(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        if (username == "" or password == ""):
            print("No username or password was supplied")
            return
        User.objects.create(username=username,password=password)  
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')

def index(request):
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')
    
def updateGenre(request):
    if request.method == "POST":
        username = request.POST.get('username')
        genre = request.POST.get('genre')
        user = User.objects.get(username=username)
        user.preferred_genres += "~" + genre + ";"
        user.save()
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')

def updateAnime(request):
    if request.method == "POST":
        username = request.POST.get('username')
        anime = request.POST.get('anime')
        user = User.objects.get(username=username)
        user.watched_anime += "~" + anime + ";"
        user.save()
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')