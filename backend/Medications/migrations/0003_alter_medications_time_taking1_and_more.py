# Generated by Django 4.1.1 on 2022-10-19 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Medications', '0002_alter_medications_time_taking1_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medications',
            name='time_taking1',
            field=models.TimeField(),
        ),
        migrations.AlterField(
            model_name='medications',
            name='time_taking2',
            field=models.TimeField(),
        ),
        migrations.AlterField(
            model_name='medications',
            name='time_taking3',
            field=models.TimeField(),
        ),
        migrations.AlterField(
            model_name='medications',
            name='time_taking4',
            field=models.TimeField(),
        ),
    ]
