# Generated by Django 4.1.1 on 2022-10-23 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Vitals_Weight', '0006_alter_weight_comments_alter_weight_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='weight',
            name='comments',
            field=models.TextField(default=None, max_length=999, null=True),
        ),
    ]