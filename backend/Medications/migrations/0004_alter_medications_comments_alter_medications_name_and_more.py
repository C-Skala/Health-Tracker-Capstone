# Generated by Django 4.1.1 on 2022-10-23 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Medications', '0003_alter_medications_time_taking1_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medications',
            name='comments',
            field=models.TextField(default=None, max_length=999),
        ),
        migrations.AlterField(
            model_name='medications',
            name='name',
            field=models.CharField(default=None, max_length=99),
        ),
        migrations.AlterField(
            model_name='medications',
            name='strength',
            field=models.IntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='medications',
            name='time_taking1',
            field=models.TimeField(default=None),
        ),
        migrations.AlterField(
            model_name='medications',
            name='time_taking2',
            field=models.TimeField(default=None),
        ),
        migrations.AlterField(
            model_name='medications',
            name='time_taking3',
            field=models.TimeField(default=None),
        ),
        migrations.AlterField(
            model_name='medications',
            name='time_taking4',
            field=models.TimeField(default=None),
        ),
    ]
