from typing import Any, List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.utils.deps import get_db
from backend.core.schemas import CategoryDetailSchema, CategorySchema
from backend.core.crud import category


router = APIRouter()


@router.get("/", response_model=List[CategoryDetailSchema])
def get_categories(db: Session = Depends(get_db)) -> Any:
    categories = category.get_multi(db)
    return categories


@router.post("/", response_model=CategoryDetailSchema)
def add_category(*, db: Session = Depends(get_db), category_in: CategorySchema) -> Any:
    newCategory = category.create(db, obj_in=category_in)
    return newCategory