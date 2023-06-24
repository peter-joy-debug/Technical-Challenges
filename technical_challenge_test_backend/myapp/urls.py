from django.urls import path
from .views import MissionAPIView, VisionAPIView, ObjectivesAPIView

urlpatterns = [
    path('mission/', MissionAPIView.as_view(), name='mission'),
    path('vision/', VisionAPIView.as_view(), name='vision'),
    path('objectives/', ObjectivesAPIView.as_view(), name='objectives'),
]
