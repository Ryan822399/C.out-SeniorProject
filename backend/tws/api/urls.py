from rest_framework import routers
from .views import *
from django.urls import include
from django import settings
from django.urls import path, include
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('workouts', WorkoutViewSet)
router.register('ratings', RatingViewSet)
router.register('posts', PostsViewSet)


urlpatterns = [
path('', include(router.urls)),
path('', include('posts.urls')),
]

if settings.DEBUG: # new
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
