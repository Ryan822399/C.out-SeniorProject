from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from .views import HomePageView

urlpatterns = [
    path('api/', include('api.urls')),
    path('auth/', obtain_auth_token),
    path('admin/', admin.site.urls),
    path('', HomePageView.as_view(), name='home'),

]
