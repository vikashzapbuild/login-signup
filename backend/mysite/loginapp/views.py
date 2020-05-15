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





class StudentSignupListCreate(APIView):
    def get(self, request, format=None):
        account = StudentSignup.objects.all()
        serializer = StudentSignupSerializer(account, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = StudentSignupSerializer(data=request.data)
        print("hellooo",serializer)
        print("serializer")
        if serializer.is_valid():
            print("serializer is  valid")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("error at:",serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentSignupListPut(viewsets.ModelViewSet):
    queryset = StudentSignup.objects.all()
    serializer_class = StudentSignupSerializer
# Create your views here.
