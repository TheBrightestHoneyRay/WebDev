from django.shortcuts import render
from django.http import JsonResponse
from api.models import Product, Category


products = Product.objects.all()
categories = Category.objects.all()


def product_list(request):
    products_json = [p.to_json for p in products]
    return JsonResponse(products_json)


def product_details(product_id, request):
    products_json = [p.to_json for p in products]
    for product in products_json:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'error': 'Product does not exist'})


def category_list(request):
    categories_json = [c.to_json for c in categories]
    return JsonResponse(categories_json)


def category(category_id, request):
    categories_json = [c.to_json for c in categories]
    for category in categories_json:
        if category['id'] == category_id:
            return JsonResponse(category)
    return JsonResponse({'error': 'Category does not exist'})


def product_by_category(category_id, request):
    categories_json = [c.to_json for c in categories]
    products_json = [p.to_json for p in products]
    for category in categories_json:
        if category['id'] == category_id:
            return JsonResponse(category)
    return JsonResponse({'error': 'Category does not exist'})