from django.contrib import admin
from .models import Workout, Rating, Post, User
admin.site.register(Workout)
admin.site.register(Rating)
admin.site.register(User)
admin.site.register(Post)