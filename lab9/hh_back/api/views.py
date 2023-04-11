from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy


def companies(request):
    comp_list = Company.objects.all()
    comp_json = []
    for c in comp_list:
        comp_json.append(c.to_json())
    return JsonResponse(comp_json, safe=False)


def company(request, company_id):
    comp_list = Company.objects.all()
    comp = comp_list.get(id=company_id).to_json()
    return JsonResponse(comp, safe=False)


def vacancy_by_company(request, company_id):
    comp_list = Company.objects.all()
    vacancy_list = Vacancy.objects.all()
    vacan_json = []
    comp = comp_list.get(id=company_id)
    for v in vacancy_list:
        if v.company == comp:
            vacan_json.append(v.to_json())
    return JsonResponse(vacan_json, safe=False)


def vacancies(request):
    vacan_list = Vacancy.objects.all()
    vacan_json = []
    for v in vacan_list:
        vacan_json.append(v.to_json())
    return JsonResponse(vacan_json, safe=False)


def vacancy(request, vacancy_id):
    vacan_list = Vacancy.objects.all()
    vacan = vacan_list.get(id=vacancy_id).to_json()
    return JsonResponse(vacan, safe=False)
