from django.db import models
from django.db.models.fields import CharField, TextField, URLField
from django.db.models.fields.files import FileField 

class Project(models.Model):
    title = CharField( max_length=100 )
    description = TextField(max_length=250)
    image = FileField(upload_to='portfolio/images/')
    url = URLField(blank=True)
    
  
    
