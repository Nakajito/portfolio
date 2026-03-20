from django.views import generic

from .models import Post


class PostListView(generic.ListView):
    queryset = Post.objects.filter(status="published").order_by("-created_at")
    template_name = "blog/post_list.html"
    context_object_name = "post_list"
    paginate_by = 6


class PostDetailView(generic.DetailView):
    model = Post
    template_name = "blog/post_detail.html"
    context_object_name = "post"
