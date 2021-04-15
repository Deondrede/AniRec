from django.urls import path
from .import views


urlpatterns = [
    path('', views.index, name="index"),
    path('users', views.createUser, name="users"),
    path('genres', views.updateGenre, name="genre"),
    path('anime', views.updateAnime, name="anime")
]