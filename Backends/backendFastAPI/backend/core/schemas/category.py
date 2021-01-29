from pydantic import BaseModel


class CategorySchema(BaseModel):
    description: str


class CategoryDetailSchema(CategorySchema):
    id: int

    class Config:
        orm_mode = True