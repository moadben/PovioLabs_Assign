from rest_framework import serializers
from models import Post

class PostSerializer(serializers.ModelSerializer):
	class Meta:
		model = Post
		fields = ('username', 'title', 'description', 'date', 'id')

	def create(self, validated_data):
		id = validated_data.get('id', None)
		title = validated_data.get('title', None)
		username = validated_data.get('username')
		description = validated_data.get('description', None)
		date = validated_data.get('date', None)
		return Post.objects.create(title=title, username=user, description=description, date=date)