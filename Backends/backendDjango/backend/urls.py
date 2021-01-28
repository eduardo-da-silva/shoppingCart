from django.contrib import admin
from django.urls import include, path

from backend.core.router import router

from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)

# schema_view =

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("admin/", admin.site.urls),
    path("docs/openapi-file", SpectacularAPIView.as_view(), name="schema"),
    # Optional UI:
    path(
        "docs/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    path("docs/redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"),
]
