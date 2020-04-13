from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    TYPES = (
        ('private', 'private'),
        ('public', 'public')
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    userName = models.CharField(max_length = 15)
    firstName = models.CharField(max_length = 30, blank=True)
    lastName = models.CharField(max_length = 30, blank=True)
    email = models.EmailField(blank=True)
    bio = models.TextField(blank=True)
    heightFeet = models.IntegerField(validators=[MinValueValidator(0),
     MaxValueValidator(10)], blank=True, default=0)
    heightInches = models.IntegerField(validators=[MinValueValidator(0),
      MaxValueValidator(11)], blank=True, default=0)
    dob = models.DateField(null=True, blank=True)
    location = models.CharField(max_length = 30, blank=True)
    picture = models.ImageField(upload_to='images/profileImages', null=True, blank=True)
    accountType = models.CharField(max_length = 10, choices=TYPES, default='private')


    def __str__(self):
        return str(self.id)

class FriendShip(models.Model):
    userID = models.IntegerField()
    friedID = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True, blank=True)
    class Meta:
        unique_together = (('userID', 'friedID'),)
        index_together = (('userID', 'friedID'),)

class Groups(models.Model):
    groupID = models.IntegerField()
    userID = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True, blank=True)

@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance, firstName="temp")
    instance.profile.save()

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

class GroupWorkout(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=32)
    description = models.TextField(max_length=360)
    weight = models.FloatField(default=0)
    date = models.DateField(auto_now=False, blank=True)

    def __str__(self):
        return self.title

class Dummy(models.Model):

    title = models.CharField(max_length=32)

    def __str__(self):
        return self.title

class FeedPost(models.Model):
    title = models.CharField(max_length=15, null=True)
    caption = models.CharField(max_length=40, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    post = models.CharField(max_length=1000, null=True)
    picture = models.ImageField(upload_to='images/', null=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True)
    likes =  models.FloatField(default=0, null=True)


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
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=10)
    date = models.DateField(auto_now=False, null=True, blank=True)

    def curr_userpicture(self):
        pro = Profile.objects.get(user=self.user.id)

        return str(pro.picture)

    def curr_username(self):
        pro = Profile.objects.get(user=self.user.id)

        return str(pro.userName)

    def __str__(self):
        return self.title

class Comment(models.Model):
    description = models.TextField()
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    forumPost = models.OneToOneField(ForumPost, on_delete=models.CASCADE)
    date = models.DateField(auto_now=False, null=True, blank=True)
    def curr_userpicture(self):
        pro = Profile.objects.get(user=self.user.id)

        return str(pro.picture)

    def curr_username(self):
        pro = Profile.objects.get(user=self.user.id)

        return str(pro.userName)

    def __str__(self):
        return self.description

class Like(models.Model):
    count = models.IntegerField()
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
