from rest_framework import generics
from .models import Organization
from .serializers import OrganizationSerializer
from rest_framework.response import Response

class MissionAPIView(generics.ListAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        mission = queryset.first().mission
        return Response({'mission': mission})

class VisionAPIView(generics.ListAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        vision = queryset.first().vision
        return Response({'vision': vision})

class ObjectivesAPIView(generics.ListAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        objectives = queryset.first().objectives
        return Response({'objectives': objectives})