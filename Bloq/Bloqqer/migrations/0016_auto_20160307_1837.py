# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-08 02:37
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bloqqer', '0015_auto_20160307_1658'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='date_added',
            field=models.DateField(default=datetime.datetime(2016, 3, 7, 18, 37, 19, 899386)),
        ),
    ]
