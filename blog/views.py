from django.shortcuts import render, get_object_or_404
from .models import Blog

def post(request):
    posts = Blog.objects.all()
    return render(request, 'post.html', {'posts' : posts})

def post_detail(request, post_id):
    post = get_object_or_404(Blog, pk = post_id)
    return render(request, 'post_detail.html', {'post' : post})
