# Generated by Django 3.0.2 on 2020-02-16 23:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200216_1546'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedpost',
            name='picture',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
