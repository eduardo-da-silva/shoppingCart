from django.contrib import admin
from django.urls import include, path

from backend.core.router import router

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("admin/", admin.site.urls),
]
