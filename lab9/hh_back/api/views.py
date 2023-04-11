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

    try:
        comp = comp_list.get(id=company_id).to_json()
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(comp, safe=False)


def vacancy_by_company(request, company_id):
    comp_list = Company.objects.all()
    vacancy_list = Vacancy.objects.all()

    try:
        comp = comp_list.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    vacan_json = []

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

    try:
        vacan = vacan_list.get(id=vacancy_id).to_json()
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(vacan, safe=False)


def top_ten(request):
    tops = Vacancy.objects.all().order_by('-salary')[:10]
    tops_json = []

    for t in tops:
        tops_json.append(t.to_json())

    return JsonResponse(tops_json, safe=False)
