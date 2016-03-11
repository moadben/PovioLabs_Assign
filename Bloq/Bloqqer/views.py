from django.shortcuts import render
from models import Post
import json
from django.contrib.auth import authenticate, login
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from serializers import PostSerializer
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt



def index(request):
	latest_post_list = Post.objects.order_by('date_added')[:5]
	context = {'latest_post_list': latest_post_list}
	return render(request, 'Bloqqer/index.html', context)

def createPost(request):
	user = request.user.username
	print(user)
	return render(request, 'Bloqqer/createPost.html')

def post(request, post_id):
	post = Post.objects.get(pk=post_id)
	return render(request, 'Bloqqer/viewPost.html', {'post': post})


class PostList(generics.ListCreateAPIView):

	def get(self, request, format=None):
		post = Post.objects.all().order_by('-date')
		serializer = PostSerializer(post, many=True)
		return Response(serializer.data)


	def post(self, request, format=None):
		username = request.COOKIES.get('username')
		user = User.objects.get(username=username)
		serializer = PostSerializer(data=request.data, context={'user':user})
		print(serializer.is_valid())
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		print(serializer.errors)
		return Response(serializer.errors)

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer
