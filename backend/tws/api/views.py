from django.shortcuts import render
from .models import *
from rest_framework import viewsets, permissions, generics, status
from .serializers import *

from django.db.models import Count, Q
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import JsonResponse
from django.core import serializers
from django.contrib.auth.models import User

from django.shortcuts import get_object_or_404

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny, )

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    @action(detail=True, methods=['POST'])
    def rate_workout(self, request, pk=None):
        if 'stars' in request.data:

            workout = Workout.objects.get(id=pk)
            stars = request.data['stars']
            user = request.user

            try:
                rating = Rating.objects.get(user=user.id, workout=workout.id)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating Updated Successfully', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            except:
                 rating = Rating.objects.create(user=user, workout=workout, stars=stars)
                 serializer = RatingSerializer(rating, many=False)
                 response = {'message': 'Rating Created Successfully', 'result': serializer.data}
                 return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'Stars must be provided'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
    #disabling update and create mehtod for workout endpoint
    def update(self, request, *args, **kwargs):
        response = {'message': 'Rating May Not Be Updated This Way'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

#    def create(self, request, *args, **kwargs):
#        response = {'message': 'Rating May Not Be Create This Way'}
#        return Response(response, status=status.HTTP_400_BAD_REQUEST)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )
