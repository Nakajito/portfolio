from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from .models import Project


@admin.register(Project)
class ProjectAdmin(TranslationAdmin):
    list_display = ["title", "is_featured", "order", "created_at"]
    list_editable = ["is_featured", "order"]
    list_filter = ["is_featured"]
    search_fields = ["title", "description", "tags"]
    ordering = ["order"]
