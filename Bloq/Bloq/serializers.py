from rest_framework import serializers
from models import post

class PostSerializers(serializers.Modelserializers):
	class Meta:
		model = Post
