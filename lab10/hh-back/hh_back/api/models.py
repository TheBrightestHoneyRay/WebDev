from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    city = models.CharField(max_length=50, null=True)
    address = models.TextField(null=True)

    def to_json(self):
        return{
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    salary = models.FloatField(null=True)
    company = models.ForeignKey(Company, related_name='vacancies', on_delete=models.CASCADE)

    def to_json(self):
        return{
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.name
        }