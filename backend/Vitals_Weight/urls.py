from django.urls import path, include
from Vitals_Weight import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.Weight_list),
    path('<int:pk>/', views.Weight_detail),
]
