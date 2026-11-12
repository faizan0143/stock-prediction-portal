from django.urls import path
from accounts import views as register_view

urlpatterns = [
    path('register/',register_view.RegisterUser.as_view()),
]