from django.shortcuts import render
from models import Post
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser
from serializers import PostSerializer
from django.views.decorators.csrf import csrf_exempt

def index(request):
	latest_post_list = Post.objects.order_by('date_added')[:5]
	context = {'latest_post_list': latest_post_list}
	return render(request, 'Bloqqer/index.html', context)

def createPost(request):
	return render(request, 'Bloqqer/createPost.html')

def post(request, post_id):
	post = Post.objects.get(pk=post_id)
	return render(request, 'Bloqqer/viewPost.html', {'post': post})

class PostList(generics.ListCreateAPIView):
	
	def get(self, request, format=None):
		post = Post.objects.all().order_by('-date')
		serializer = PostSerializer(post, many=True)
		return Response(serializer.data)

	@csrf_exempt
	def post(self, request, format=None):
		user = request.user
		serializer = PostSerializer(data=request.data)
		if serializer.is_valid():
			print "We're here"
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer