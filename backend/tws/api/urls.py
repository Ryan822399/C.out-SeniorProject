from rest_framework import routers
from .views import *
from django.urls import path
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('workouts', WorkoutViewSet)
router.register('ratings', RatingViewSet)



urlpatterns = [
path('', include(router.urls)),
]
