from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

#extra_kwargs for hiding password and only allows user to send passwd but never send in api
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ( 'id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    #overwrite:validate user
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
