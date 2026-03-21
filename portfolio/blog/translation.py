from modeltranslation.translator import TranslationOptions
from modeltranslation.translator import register

from .models import Category
from .models import Post


@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ("name",)


@register(Post)
class PostTranslationOptions(TranslationOptions):
    fields = ("title", "content", "short_description", "slug")
