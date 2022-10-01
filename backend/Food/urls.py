from django.urls import path, include
from Food import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.food_list),
    path('<int:pk>/', views.food_detail),
]
