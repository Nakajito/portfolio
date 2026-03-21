from deep_translator import GoogleTranslator
from django.conf import settings
from django.db import models
from django.utils.text import slugify
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
    short_description = models.CharField(
        _("Descripción corta"),
        max_length=255,
        blank=True,
        null=True,
        help_text=_(
            "Breve resumen que aparecerá en la tarjeta de la lista de artículos."
        ),
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

    def save(self, *args, **kwargs):
        translator = GoogleTranslator(source="es", target="en")

        try:
            if self.title_es_mx and not self.title_en:
                self.title_en = translator.translate(self.title_es_mx)

            if self.short_description_es_mx and not self.short_description_en:
                self.short_description_en = translator.translate(
                    self.short_description_es_mx
                )

            if self.content_es_mx and not self.content_en:
                self.content_en = translator.translate(self.content_es_mx)

            if self.title_en and not self.slug_en:
                self.slug_en = slugify(self.title_en)

        except Exception as e:
            print(f"Error en traducción automática: {e}")

        if self.title_es_mx and not self.slug_es_mx:
            self.slug_es_mx = slugify(self.title_es_mx)

        if self.title_en and not self.slug_en:
            self.slug_en = slugify(self.title_en)

        super().save(*args, **kwargs)
