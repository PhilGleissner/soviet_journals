from flask import Flask, redirect, request, url_for
from flask import render_template
from journals_data import JOURNALS_DATA

app = Flask(__name__)

@app.route("/")
def home():
	return render_template('index.html')

@app.route('/visualizations/database')
def database():
	return render_template('visualizations/database.html')

@app.route('/journals')
def journals():
    return render_template('/journals.html', journals_data=JOURNALS_DATA)

if __name__ == '__main__':
	app.run()
