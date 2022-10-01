from django.urls import path, include
from Vitals_HR import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.HR_list),
    path('<int:pk>/', views.HR_detail),
]
