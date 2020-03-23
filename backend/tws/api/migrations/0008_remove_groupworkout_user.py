from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_groupworkout_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='groupworkout',
            name='user',
        ),
    ]
