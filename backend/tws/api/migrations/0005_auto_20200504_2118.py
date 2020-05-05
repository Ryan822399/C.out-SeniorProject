# Generated by Django 3.0.4 on 2020-05-05 04:18

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0004_auto_20200504_1638'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='comment',
            unique_together={('user', 'description')},
        ),
        migrations.AlterIndexTogether(
            name='comment',
            index_together={('user', 'description')},
        ),
    ]