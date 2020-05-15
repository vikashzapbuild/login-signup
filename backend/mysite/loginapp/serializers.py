from rest_framework import serializers
from .models import StudentSignup

class StudentSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model=StudentSignup
        fields='__all__'
