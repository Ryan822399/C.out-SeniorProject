from rest_framework import routers
from .views import *
from django.urls import path
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('workouts', WorkoutViewSet)
router.register('ratings', RatingViewSet)
router.register('dummy', DummyViewSet)
router.register("groupworkout", GroupWorkoutViewSet)
router.register('profile', ProfileViewSet)
router.register("feedposts", FeedPostViewSet)
router.register("comment", CommentViewSet)
router.register("LikePost", LikeViewSet)
router.register("friends", FriendsViewSet)
router.register("top3flexforums", TopThreeFlexForumViewSet)
router.register("top3dietforums", TopThreeDietForumViewSet)
router.register("top3cardioforums", TopThreeCardioForumViewSet)
router.register("top3weightforums", TopThreeWeightForumViewSet)
router.register("forumposts", ForumPostViewSet)


urlpatterns = [
path('', include(router.urls)),
]
