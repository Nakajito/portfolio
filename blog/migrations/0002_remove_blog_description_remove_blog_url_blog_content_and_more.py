# Generated by Django 5.0 on 2024-01-01 22:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("blog", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="blog",
            name="description",
        ),
        migrations.RemoveField(
            model_name="blog",
            name="url",
        ),
        migrations.AddField(
            model_name="blog",
            name="content",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="blog",
            name="date",
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name="blog",
            name="image",
            field=models.FileField(upload_to="blog/images"),
        ),
    ]
