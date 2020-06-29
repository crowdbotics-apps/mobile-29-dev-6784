# Generated by Django 2.2.13 on 2020-06-29 05:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0002_load_initial_data"),
    ]

    operations = [
        migrations.AddField(
            model_name="customtext",
            name="hgfhfh",
            field=models.OneToOneField(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="customtext_hgfhfh",
                to="home.CustomText",
            ),
        ),
        migrations.AddField(
            model_name="customtext",
            name="jhygjg",
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
