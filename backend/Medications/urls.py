from django.urls import path, include
from Medications import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.Med_list),
    path('<int:pk>/', views.Med_detail),
]
