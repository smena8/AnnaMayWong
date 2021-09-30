from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('films/', views.films, name='films'),
    path('gallery/', views.gallery, name='gallery'),
]