from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from markdownx.models import MarkdownxField
from markdownx.utils import markdownify


class Category(models.Model):
    name = models.CharField(_("Nombre"), max_length=100)
    slug = models.SlugField(_("Slug"), max_length=100, unique=True)

    class Meta:
        verbose_name = _("Categoría")
        verbose_name_plural = _("Categorías")

    def __str__(self):
        return self.name


class Post(models.Model):
    STATUS_CHOICES = (
        ("draft", _("Borrador")),
        ("published", _("Publicado")),
    )

    title = models.CharField(_("Título"), max_length=200, unique=True)
    slug = models.SlugField(_("Slug"), max_length=200, unique=True)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="blog_posts",
        verbose_name=_("Autor"),
    )
    content = MarkdownxField(_("Contenido"))
    created_at = models.DateTimeField(_("Fecha de creación"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Fecha de actualización"), auto_now=True)
    status = models.CharField(
        _("Estado"), max_length=10, choices=STATUS_CHOICES, default="draft"
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="posts",
        verbose_name=_("Categoría"),
    )

    class Meta:
        ordering = ["-created_at"]
        verbose_name = _("Publicación")
        verbose_name_plural = _("Publicaciones")

    def __str__(self):
        return self.title

    @property
    def formatted_markdown(self):
        return markdownify(self.content)
