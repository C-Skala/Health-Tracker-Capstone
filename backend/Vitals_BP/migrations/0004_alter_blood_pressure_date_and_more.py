# Generated by Django 4.1.1 on 2022-10-20 20:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Vitals_BP', '0003_alter_blood_pressure_date_alter_blood_pressure_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blood_pressure',
            name='date',
            field=models.DateField(default=None),
        ),
        migrations.AlterField(
            model_name='blood_pressure',
            name='diastolic',
            field=models.IntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='blood_pressure',
            name='systolic',
            field=models.IntegerField(default=None),
        ),
    ]
