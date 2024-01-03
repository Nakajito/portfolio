from django.db import models
import datetime

class Blog(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)
    image = models.FileField(upload_to='blog/images')
    date = models.DateField(default=datetime.date.today)
