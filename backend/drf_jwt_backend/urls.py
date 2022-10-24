"""drf_jwt_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('authentication.urls')),
    path('api/food/', include('Food.urls')),
    path('api/meds/', include('Medications.urls')),
    path('api/BP/', include('Vitals_BP.urls')),
    path('api/BS/', include('Vitals_BS.urls')),
    path('api/HR/', include('Vitals_HR.urls')),
    path('api/Weight/', include('Vitals_Weight.urls')),
    path('api/Chart/', include('combined_chart_data.urls')),
]
