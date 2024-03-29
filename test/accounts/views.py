from PlotRec import get_recs, try_this
from accounts.models import Review, User
from django.contrib.auth.forms import UserCreationForm
from django.core import serializers
from django.http import HttpResponse

def remove_chars(genres:str):
    return genres.split(';')

def createUser(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        if (username == "" or password == ""):
            print("No username or password was supplied")
            return
        User.objects.create(username=username,password=password,preferred_genres="",watched_anime="")  
        
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')

def index():
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')
    
def updateGenre(request):
    if request.method == "POST":
        username = request.POST.get('username')
        genre = request.POST.get('genre')
        user = User.objects.get(username=username)
        user.preferred_genres += f"{genre};"
        user.save()

    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')

def updateAnime(request):
    if request.method == "POST":
        username = request.POST.get('username')
        anime = request.POST.get('anime')
        user = User.objects.get(username=username)
        user.watched_anime += f"{anime};"
        user.recommendations = get_recs(remove_chars(user.watched_anime))
        user.try_this = try_this(remove_chars(user.watched_anime))
        user.save()

    return index()

def updateReview(request):
    if request.method == "POST":
        anime_id = request.POST.get('anime_id')
        review = request.POST.get('review')
        username = request.POST.get('username')
        Review.objects.create(anime_id=anime_id,review=review,username=username)
        
    if request.method == "GET" and request.GET.get('anime_id') != None:
        anime_id = request.GET.get('anime_id')
        reviews = list(Review.objects.all().filter(anime_id=anime_id))
        reviews_json = serializers.serialize('json',reviews)
        return HttpResponse(reviews_json,content_type='application/json')

    return index()
