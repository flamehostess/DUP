from datetime import date
import datetime 
from django.db import models

from django.utils import timezone

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=120)
    text = models.TextField()
    pub_date = models.DateTimeField('дата публикации', default=date.today)

    def __str__(self):
        return self.title

    def was_published_recently(self):
        return self.pub_date >= (timezone.now() - datetime.timedelta(days = 7))

    # чтобы Русифицировать модели приложения
    class Meta: 
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'



class Comment(models.Model):
    # A Comment to a Post
     text = models.TextField()
     post = models.ForeignKey(Post, on_delete = models.CASCADE)

     def __str__(self):
        return self.text

     # чтобы Русифицировать модели приложения
     class Meta: 
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии' 

