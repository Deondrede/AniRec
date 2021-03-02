from django.shortcuts import render
from .models import User
from .forms import UserForm
from django.http import HttpResponse
# Create your views here.
def index(request):
    form = UserForm()
    return render(request, 'register.html', {'form':form})

def add_user(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        form.save()
    return HttpResponse("success")