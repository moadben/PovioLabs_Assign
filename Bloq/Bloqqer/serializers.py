from rest_framework import serializers
from models import Post
from django.contrib.auth.models import User


class PostSerializer(serializers.ModelSerializer):
	class Meta:
		model = Post
		fields = ('id', 'user', 'username', 'title', 'description', 'date')

	def create(self, validated_data):
		user = self.context.get("user")
		username = user.username
		title = validated_data.get('title', None)
		description = validated_data.get('description', None)
		return Post.objects.create(title=title, user=user, username=username, description=description)
