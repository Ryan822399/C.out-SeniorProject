from django.contrib import admin
from .models import Workout, Rating, Post, Dummy, UserTest
admin.site.register(Workout)
admin.site.register(Rating)
admin.site.register(UserTest)
admin.site.register(Post)
admin.site.register(Dummy)
