from modeltranslation.translator import TranslationOptions
from modeltranslation.translator import register

from .models import Project


@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ("title", "description")
