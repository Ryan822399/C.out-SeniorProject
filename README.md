# Group: C.out

**BACKEND**

For Backend, go to backend folder.

Install the virtual environment if you have't done so.

```
pip install pipenv
```

Run your virtual env

```
pipenv shell
```

Download the dependencies (Django and DjangoRestFramework) if you haven't done so.

```
pipenv install
```

Download the headers for Django
```
pip install django-cors-headers
pip install Django-rest-framework
```

To run the server, CD into tws and run:

```
python manage.py runserver
```

Server at http://localhost:8000/

**FRONTEND**

First make sure you run the backend server.
For Frontend, go to frontend folder, CD into tws and run.
```
npm install
```
Then run
```
npm start
```

If you get a Node error, just delete your node_modules file and npm install.
