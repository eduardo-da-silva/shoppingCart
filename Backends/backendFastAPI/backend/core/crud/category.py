from .base import CRUDBase

from backend.core.models import Category
from backend.core.schemas import CategorySchema, CategoryDetailSchema


class CategoryCRUD(CRUDBase[Category, CategorySchema, CategoryDetailSchema]):
    pass


category = CategoryCRUD(Category)