# Soviet Journals

The Soviet Journals website is the web interface (flask app) of the digital humanities project Soviet Journals Reconnected, developed by Philip Gleissner at the Center for Digital Humanities at Princeton. The flask app is based on Brown University Library's [Mapping Genres app](https://github.com/Brown-University-Library/mapping-genres-website).

It features a number of static sites with information on Soviet literary magazines and the Soviet Journals Reconnected Database. A Gephi plugin presents interactive visualizations of networks.

## How to run the project

If you don't have virtualenv installed yet, run `pip install virtualenv` first.

If you're setting this project up for the first time, then run the following commands:

`$ virtualenv venv`

`$ . venv/bin/activate`

`$ pip install -r requirements.txt`

`$ export FLASK_APP=app.py`

`$ flask run`

Use control+C to stop the flask app and `$ deactivate` to leave venv.

Once you've got your virtualenv set up wit flask, you can skip pip installing requirements and exporting app.py.

## Tutorial

This tutorial provides information on how to set up venv and run flask: http://flask.pocoo.org/docs/0.12/installation/


Project Director, Technical Lead: Philip Gleissner

Development Consultant: Rabea Gleissner

Consultant: Jean Bauer, Natalia Ermolaev, Benjamin Hicks, Thomas F. Keenan

