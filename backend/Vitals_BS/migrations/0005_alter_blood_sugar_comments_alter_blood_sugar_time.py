# Generated by Django 4.1.1 on 2022-10-23 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Vitals_BS', '0004_alter_blood_sugar_date_alter_blood_sugar_sugar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blood_sugar',
            name='comments',
            field=models.TextField(default=None, max_length=999),
        ),
        migrations.AlterField(
            model_name='blood_sugar',
            name='time',
            field=models.TimeField(default=None),
        ),
    ]
