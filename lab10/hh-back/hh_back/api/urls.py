from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:company_id>/', views.company),
    path('companies/<int:company_id>/vacancies', views.vacancy_by_company),
    path('vacancies/', views.vacancies),
    path('vacancies/<int:vacancy_id>', views.vacancy),
    path('vacancies/top_ten/', views.top_ten)
]
