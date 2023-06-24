from django.db import models

        # mission='To enable people and businesses throughout the world to realize their full potential.',
        # vision='To be a successful global information technology company trusted by its customers for service excellence.',
        # objectives='Deep understanding of system integration testing (SIT) and user acceptance testing (UAT).'
class Organization(models.Model):
    mission = models.TextField(default='To enable people and businesses throughout the world to realize their full potential.')
    vision = models.TextField(default='To be a successful global information technology company trusted by its customers for service excellence.')
    objectives = models.TextField(default='Deep understanding of system integration testing (SIT) and user acceptance testing (UAT).')

    def __str__(self):
        return f"Organization - {self.pk}"