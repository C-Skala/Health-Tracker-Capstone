from django.urls import path, include
from Vitals_BP import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.BP_list),
    path('<int:pk>/', views.BP_detail),
]
