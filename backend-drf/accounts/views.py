from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserSerializers
from rest_framework import generics
from rest_framework.permissions import AllowAny

# Create your views here.
class RegisterUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers   
    permission_classes = [AllowAny]  