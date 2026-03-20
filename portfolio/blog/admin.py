from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin

from .models import Category
from .models import Post


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Post)
class PostAdmin(MarkdownxModelAdmin):
    list_display = ("title", "author", "status", "created_at")
    list_filter = ("status", "created_at", "category")
    search_fields = ("title", "content")
    date_hierarchy = "created_at"
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("-created_at",)

    class Media:
        css = {"all": ("css/admin_markdown.css",)}
