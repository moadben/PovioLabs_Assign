from django.shortcuts import render
from models import Post

def index(request):
	latest_post_list = Post.objects.order_by('date_added')[:5]
	context = {'latest_post_list': latest_post_list}
	return render(request, 'Bloqqer/index.html', context)