# Generated by Django 4.1.1 on 2022-10-23 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Vitals_HR', '0004_alter_heart_rate_date_alter_heart_rate_heart_rate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='heart_rate',
            name='comments',
            field=models.TextField(default=None, max_length=999),
        ),
        migrations.AlterField(
            model_name='heart_rate',
            name='time',
            field=models.TimeField(default=None),
        ),
    ]
