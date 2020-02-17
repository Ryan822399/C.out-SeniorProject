from django.contrib import admin
from .models import Workout, Rating, FeedPost, Dummy, Profile, ForumPost, Comment, Like
admin.site.register(Workout)
admin.site.register(Rating)
#admin.site.register(UserTest)
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['firstName', 'lastName', 'email']
    list_filter = ['lastName']
    search_fields = ['firstName', 'lastName']
admin.site.register(FeedPost)
admin.site.register(Dummy)
admin.site.register(ForumPost)
admin.site.register(Comment)
admin.site.register(Like)
