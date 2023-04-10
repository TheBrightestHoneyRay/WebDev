from django.urls import path, include
from api import views


urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:product_id>', views.product_details),
    path('categories/', views.category_list),
    path('categories/<int:category_id>', views.category),
    path('categories/<int:category_id>/products/', views.product_by_category)
]