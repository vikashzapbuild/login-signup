from django.shortcuts import render
from .models import StudentSignup
from .serializers import StudentSignupSerializer
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.parsers import JSONParser
from django.http import HttpResponse
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth.models import User, auth





class StudentSignupViewSet(viewsets.ModelViewSet):
    queryset = StudentSignup.objects.all()
    serializer_class = StudentSignupSerializer

    def post(self, request, *args, **kwargs):
        id=request.data['id']
        join_code=request.data['join_code']
        full_name=request.data['full_name']
        username=request.data['username']
        password=request.data['password']
        email=request.data['email']
        StudentSignup.objects.create(id=id,join_code=join_code,full_name=full_name,username=username,
        password=password,email=email)
        return HttpResponse({'message': 'List created'}, status=200)