# Technical-Challenges
 This repository is reserved for technical challenges.

 Steps of Running this App
 1. You need to clone the repo first
 2. You cd in technical-challenge-test and type commandd 'npm install'
 3. You also cd in technical-challenge-test-backend and type commands
    - pipenv --rm
    - rm Pipfile* 
    - pipenv install --python 3.10
    - pipenv install requests
    - pipenv shell
    - pip install -r requirements.txt
    - pip freeze > requirements.txt
4. Then after all type this command to start backend server:
    - python manage.py runserver
    After running server it will be executed on  http://127.0.0.1:8000/
5. Lastly, in other terminal cd in "technical-challenge-test" and start the client server:
    - npm start
    which will be working on http://localhost:3000/

    Thank You!!!

    Prepared by Honore Peter Joy Ndayishimiye.
