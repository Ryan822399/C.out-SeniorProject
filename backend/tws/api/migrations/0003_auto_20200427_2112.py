# Generated by Django 3.0.3 on 2020-04-28 04:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200413_2123'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feedcomment',
            name='user',
        ),
        migrations.AddField(
            model_name='feedcomment',
            name='profile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Profile'),
        ),
        migrations.AlterField(
            model_name='feedcomment',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='feedcomment',
            name='feedpost',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.FeedPost'),
        ),
    ]