from django.urls import path, include
from Vitals_BS import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.BS_list),
    path('<int:pk>/', views.BS_detail),
]
