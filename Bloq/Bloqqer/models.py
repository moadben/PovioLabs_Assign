from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible
from django.db import models
import datetime
from django.contrib.auth.models import User


@python_2_unicode_compatible
class Post(models.Model):
	title = models.CharField(max_length=200, null=False, blank=False)
	username = models.CharField(max_length=200, null=True, blank=True)
	description = models.TextField(max_length=15000, null=False, blank=False)
	user = models.ForeignKey(User, null=True, blank=True)
	date = models.DateField(default=datetime.datetime.now())
	def __str__(self):
		return self.description