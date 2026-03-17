from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import redirect
from django.shortcuts import render

from .forms import ContactForm


def portafolio_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            nombre = form.cleaned_data["name"]
            correo = form.cleaned_data["email"]
            mensaje = form.cleaned_data["message"]
            asunto = f"Nuevo mensaje de portafolio de: {nombre}"
            cuerpo = f"Nombre: {nombre}\nCorreo: {correo}\n\nMensaje:\n{mensaje}"

            try:
                send_mail(
                    asunto,
                    cuerpo,
                    settings.EMAIL_HOST_USER,
                    [settings.EMAIL_HOST_USER],
                    fail_silently=False,
                )

                messages.success(
                    request, "¡Gracias! Tu mensaje ha sido enviado correctamente."
                )
                return redirect("home")
            except Exception as e:
                # Esta línea imprimirá el error real en tu terminal (donde corre uv run manage.py runserver)
                print(f"Error exacto de SMTP: {e}")

                messages.error(
                    request,
                    "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
                )
    else:
        form = ContactForm()

    context = {
        "form": form,
    }
    return render(request, "base.html", context)
