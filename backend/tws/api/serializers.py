from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ('id', 'title', 'description')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'stars', 'user', 'workout')
