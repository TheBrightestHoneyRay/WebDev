from rest_framework import serializers
from api.models import Company, Vacancy


class VacancySerializer(serializers.ModelSerializer):
    company = serializers.CharField(source='company.name')

    class Meta:
        model = Vacancy
        fields = (
            'id',
            'name',
            'description',
            'salary',
            'company'
        )


class CompanySerializer(serializers.ModelSerializer):
    vacancies = VacancySerializer(many=True)

    class Meta:
        model = Company
        fields = (
            'id',
            'name',
            'description',
            'city',
            'address',
            'vacancies'
        )

