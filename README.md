The Soviet Journals website is the web interface (flask app) of the digital humanities project Soviet Journals Reconnected, developed by Philip Gleissner at the Center for Digital Humanities at Princeton. The flask app is based on Brown University Library's Mapping Genres app: https://github.com/Brown-University-Library/mapping-genres-website

It features a number of static sites with information on Soviet literary magazines and the Soviet Journals Reconnected Database. A Gephi plugin presents interactive visualizations of networks.

This tutorial provides information on how to set up venv and run flask: http://flask.pocoo.org/docs/0.12/installation/


How to run the project:


$ virtualenv venv

$ . venv/bin/activate

$ export FLASK_APP=soviet_journals.py

$ flask run

Use control+C to stop the flask app and $ deactivate to leave venv.


Project Director, Technical Lead: Philip Gleissner

Development Consultant: Rabea Gleissner

Consultant: Jean Bauer, Natalia Ermolaev, Benjamin Hicks, Thomas F. Keenan

