# Generated by Django 4.1.1 on 2022-10-03 01:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Vitals_HR', '0002_heart_rate_date_heart_rate_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='heart_rate',
            name='date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='heart_rate',
            name='time',
            field=models.TimeField(),
        ),
    ]