# Generated by Django 4.2 on 2023-04-18 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_vacancy_company'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='city',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
