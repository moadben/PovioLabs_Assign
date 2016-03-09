from rest_framework import serializers
from models import Post

class PostSerializer(serializers.ModelSerializer):
	class Meta:
		model = Post
		fields = ('id', 'username', 'title', 'description', 'date')

	def create(self, validated_data):
		print "We're here"
		id = validated_data.get('id', None)
		title = validated_data.get('title', None)
		username = validated_data.get('username')
		description = validated_data.get('description', None)
		return Post.objects.create(title=title, username=username, description=description)