from fastapi import APIRouter
from backend.core.views import category_router

router = APIRouter()
router.include_router(category_router, tags=["category"], prefix="/categories")