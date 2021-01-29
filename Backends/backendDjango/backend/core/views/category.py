from rest_framework import viewsets

from backend.core.serializers import CategorySerializer
from backend.core.models import Category


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
