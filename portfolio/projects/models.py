from deep_translator import GoogleTranslator
from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to="projects/", blank=True, null=True)
    tags = models.CharField(
        max_length=500,
        help_text="Tecnologías separadas por coma. Ej: Reac, Python, PostgreSQL",
    )
    demo_url = models.URLField(blank=True, null=True, verbose_name="Demo URL")
    code_url = models.URLField(blank=True, null=True, verbose_name="Código fuente URL")
    is_featured = models.BooleanField(default=True, verbose_name="Destacado")
    order = models.PositiveIntegerField(
        default=0, help_text="Orden de aparición (Menor primero)"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "-created_at"]
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.title

    def get_tags_list(self):
        return [tag.strip() for tag in self.tags.split(",") if tag.strip()]

    def save(self, *args, **kwargs):
        # Instanciamos el traductor de Español a Inglés
        translator = GoogleTranslator(source="es", target="en")
        try:
            # Si hay un título en español pero el de inglés está vacío, lo traduce
            if self.title_es_mx and not self.title_en:
                self.title_en = translator.translate(self.title_es_mx)

            # Si hay descripción corta en español y la de inglés está vacía
            if self.description_es_mx and not self.description_en:
                self.description_en = translator.translate(self.description_es_mx)

        except Exception as e:
            # Si falla el internet o el servicio, imprimimos el error pero dejamos guardar el post
            print(f"Error en traducción automática: {e}")

        # Finalmente, guardamos en la base de datos (con o sin traducciones)
        super().save(*args, **kwargs)
