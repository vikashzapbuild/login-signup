from django.db import models

# Create your models here.
 class StudentSignup(models.Model):
     id = models.AutoField(primary_key=True)
     join_code = models.CharField(max_length=50, null=True, blank=False)
     full_name = models.CharField(max_length=50, null=True, blank=False)
     username = models.CharField(max_length=50, null=True, blank=False)
     password = models.CharField(max_length=50, null=True, blank=False)
     email = models.CharField(max_length=50, null=True, blank=False)