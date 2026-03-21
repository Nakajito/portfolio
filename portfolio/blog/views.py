from django.views import generic

from .models import Category
from .models import Post


class PostListView(generic.ListView):
    template_name = "blog/post_list.html"
    context_object_name = "post_list"
    paginate_by = 6

    def get_queryset(self):
        queryset = Post.objects.filter(status="published").order_by("-created_at")
        categories = self.request.GET.getlist("category")
        if categories:
            queryset = queryset.filter(category__slug__in=categories)
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categories"] = Category.objects.all()
        context["total_posts"] = Post.objects.filter(status="published").count()
        context["selected_categories"] = self.request.GET.getlist("category")
        return context


class PostDetailView(generic.DetailView):
    model = Post
    template_name = "blog/post_detail.html"
    context_object_name = "post"
