from django.db import models
from api.models import Workout

def getCardio():
    cardio = Workout.objects.filter(upper(title) = 'CARDIO')
    return cardio

def getUpperBody():
    upperBody = Workout.objects.filter(upper(title) = 'UPPER BODY')
    return upperBody

def getLowerBody():
    lowerBody = Workout.objects.filter(upper(title) = 'LOWER BODY')
    return lowerBody

def getEndurance():
    endurance = Workout.objects.filter(upper(title) = 'ENDURANCE')
    return endurance
