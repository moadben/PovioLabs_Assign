from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible
from django.db import models
import datetime

@python_2_unicode_compatible
class Post(models.Model):
	title = models.CharField(max_length=200, null=False, blank=False)
	description = models.CharField(max_length=1000, null=False, blank=False)
	username = models.CharField(max_length=200, null=False, blank=False)
	date_added = models.DateField(default=datetime.datetime.now())
	def __str__(self):
		return self.description