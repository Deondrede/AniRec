# Generated by Django 3.1.7 on 2021-03-21 01:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='preferred_genres',
        ),
        migrations.RemoveField(
            model_name='user',
            name='watched_anime',
        ),
    ]
