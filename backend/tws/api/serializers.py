from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
    #overwriting create method from user view
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class DummySerializer(serializers.ModelSerializer):
    class Meta:
        model = Dummy
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'user', 'userName', 'firstName', 'lastName', 'email', 'bio', 'heightFeet', 'heightInches', 'dob', 'location', 'picture', 'accountType')


class FeedPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedPost
        fields = '__all__'

class FeedCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedComment
        fields = '__all__'

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ('id', 'title', 'description', 'no_of_ratings', 'avg_rating', 'weight', 'date')

class GroupWorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupWorkout
        fields = ('id', 'title', 'description', 'weight', 'date')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'stars', 'user', 'workout')

class ForumPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = ('id', 'title', 'caption', 'user', 'category', 'date', 'curr_userpicture', 'curr_username')

class FriendShipSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendShip
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('description', 'user', 'forumPost', 'date', 'curr_userpicture', 'curr_username')

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('title', 'caption', 'picture')

class GroupsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('__all__')
