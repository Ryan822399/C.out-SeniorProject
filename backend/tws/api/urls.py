from rest_framework import routers
from .views import *
from django.urls import path

router = routers.DefaultRouter()

router.register('users', UserViewSet)


urlpatterns = router.urls
