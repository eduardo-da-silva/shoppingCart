from sqlalchemy import Column, String, Integer
from backend.db.base_class import Base


class Category(Base):
    id = Column(Integer, primary_key=True, index=True)
    description = Column(String)