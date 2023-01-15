from django.http import Http404, HttpResponseRedirect, HttpResponseNotFound
from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
from django.urls import reverse
import logging

logger = logging.getLogger(__name__)

from django.template import RequestContext
# Create your views here.
def my_first_simple_view(request):
    post_list = Post.objects.order_by('-pub_date')[:5]
    return render (
        request,
        'pages/index.html',
        {'post_list': post_list}
    )

def detail(request, post_id):
    try:
        a = Post.objects.get(id = post_id)
    except:
        raise Http404("Page not found")
    latest_comments_list = a.comment_set.order_by('-id')[:10]
    return render (
        request,
        'pages/detail.html',
        {'post': a,
        'latest_comments_list': latest_comments_list
        }
        )

def leave_comment(request, post_id):
    try:
        a = Post.objects.get(id = post_id)
    except:
        raise Http404("Page not found")
    # return render (
    #     request,
    #     'pages/leave_comment.html',
    #     {'post': a}
    # )
    a.comment_set.create(text = request.POST['text'])
    return HttpResponseRedirect(reverse('pages:detail', args = (a.id,)))

def archive(request, year):
    logger.error("хуйлуша")
    if int(year) > 3000:
        raise Http404()

    return HttpResponse(f"<h1>Архив по годам</h1><p>{year}</p>")

def my_second_simple_view(request):
    return render (
        request,
        'pages/index.html',
        {
            'header': 'HELLO 2',
            'posts': Post.objects.all()
        }
    )

def pageNotFound(request, exeption):
    logger.error("хуйлуша")
    return HttpResponseNotFound('jgejgio')