from fastapi import APIRouter
from backend.core.router import router as core_router

routes = APIRouter()
routes.include_router(core_router)
