# Generated by Django 4.1.1 on 2022-10-23 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Vitals_Weight', '0007_alter_weight_comments'),
    ]

    operations = [
        migrations.AlterField(
            model_name='weight',
            name='comments',
            field=models.TextField(default=None, max_length=999),
        ),
        migrations.AlterField(
            model_name='weight',
            name='date',
            field=models.DateField(default=None),
        ),
        migrations.AlterField(
            model_name='weight',
            name='weight',
            field=models.IntegerField(default=None),
        ),
    ]
