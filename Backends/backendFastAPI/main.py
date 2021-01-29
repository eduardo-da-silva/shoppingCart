from fastapi import FastAPI

from backend.settings import settings
from backend.router import routes
app = FastAPI(title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json")

app.include_router(routes, prefix=settings.API_V1_STR)
