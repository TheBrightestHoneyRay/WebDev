from django.shortcuts import render
import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


@csrf_exempt
def companies(request):
    if request.method == 'GET':
        comp_list = Company.objects.all()
        company_serializer = CompanySerializer(comp_list, many=True)
        return JsonResponse(company_serializer.data, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        comp = Company.objects.create(name=company_name)
        comp_serializer = CompanySerializer(comp)
        return JsonResponse(comp_serializer.data, safe=False)


def company(request, company_id):
    comp_list = Company.objects.all()

    try:
        comp = comp_list.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    company_serializer = CompanySerializer(comp)

    return JsonResponse(company_serializer.data, safe=False)


@csrf_exempt
def vacancy_by_company(request, company_id):
    comp_list = Company.objects.all()

    try:
        comp = comp_list.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        vacan_list = comp.vacancies
        vacancy_serializer = VacancySerializer(vacan_list, many=True)
        return JsonResponse(vacancy_serializer.data, safe=False)


def vacancies(request):
    vacan_list = Vacancy.objects.all()
    vacancy_serializer = VacancySerializer(vacan_list, many=True)

    return JsonResponse(vacancy_serializer.data, safe=False)


@csrf_exempt
def vacancy(request, vacancy_id):
    vacan_list = Vacancy.objects.all()

    try:
        vacan = vacan_list.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        vacancy_serializer = VacancySerializer(vacan)
        return JsonResponse(vacancy_serializer.data, safe=False)
    if request.method == 'DELETE':
        vacan.delete()
        return JsonResponse({'deleted': True})


def top_ten(request):
    tops = Vacancy.objects.all().order_by('-salary')[:10]
    vacancy_serializer = VacancySerializer(tops, many=True)
    return JsonResponse(vacancy_serializer.data, safe=False)
