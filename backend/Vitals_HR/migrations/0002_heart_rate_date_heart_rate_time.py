# Generated by Django 4.1.1 on 2022-10-03 01:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Vitals_HR', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='heart_rate',
            name='date',
            field=models.DateField(auto_now=True),
        ),
        migrations.AddField(
            model_name='heart_rate',
            name='time',
            field=models.TimeField(auto_now=True),
        ),
    ]
