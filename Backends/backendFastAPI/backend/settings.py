import secrets
from typing import Any

from pydantic import BaseSettings


class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Shopping Cart"
    SQLALCHEMY_DATABASE_URL: str = "sqlite:///shoppingCart.db"


settings = Settings()