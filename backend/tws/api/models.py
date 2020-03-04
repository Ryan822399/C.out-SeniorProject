from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    userName = models.CharField(max_length = 15)
    firstName = models.CharField(max_length = 30)
    lastName = models.CharField(max_length = 30)
    email = models.EmailField()
    bio = models.TextField(blank=True, default="")
    heightFeet = models.IntegerField(validators=[MinValueValidator(0),
     MaxValueValidator(10)], blank=True, default=0)
    heightInches = models.IntegerField(validators=[MinValueValidator(0),
      MaxValueValidator(11)], blank=True, default=0)
    dob = models.DateField()
    location = models.CharField(max_length = 30)
    picture = models.ImageField(upload_to='images/profileImages', null=True, blank=True)


    def __str__(self):
        return self.firstName + " " + self.lastName

class FriendsList(models.Model):
    userName = models.CharField(max_length = 15)
    firstName = models.CharField(max_length = 30)
    lastName = models.CharField(max_length = 30)
    picture = models.ImageField(upload_to='images/profileImages', null=True, blank=True)
    def __str__(self):
        return self.userName

class Workout(models.Model):
    title = models.CharField(max_length=32)
    description = models.TextField(max_length=360)
    weight = models.FloatField(default=0)
    date = models.DateField(auto_now=False, blank=True)

    def no_of_ratings(self):
        ratings = Rating.objects.filter(workout=self)
        return len(ratings)

    def avg_rating(self):
        sum = 0
        ratings = Rating.objects.filter(workout=self)
        for rating in ratings:
            sum += rating.stars
        if len(ratings) > 0:
            return sum / len(ratings)
        else:
            return 0

    def __str__(self):
        return self.title

class Dummy(models.Model):

    title = models.CharField(max_length=32)

    def __str__(self):
        return self.title

class FeedPost(models.Model):
    title = models.CharField(max_length=15)
    caption = models.CharField(max_length=40)
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    post = models.CharField(max_length=1000)
    picture = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title

class FeedComment(models.Model):
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    feedpost = models.ForeignKey(FeedPost, on_delete=models.CASCADE)

class Rating(models.Model):
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1),
     MaxValueValidator(5)])
     #unique and index together prevents rating from the user on workout plan
    class Meta:
        unique_together = (('user', 'workout'),)
        index_together = (('user', 'workout'),)

class ForumPost(models.Model):
    title = models.TextField()
    caption = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE )

    def __str__(self):
        return self.title

class Comment(models.Model):
    description = models.TextField()
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    forumPost = models.ForeignKey(ForumPost, on_delete=models.CASCADE)

class Like(models.Model):
    count = models.IntegerField()
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
