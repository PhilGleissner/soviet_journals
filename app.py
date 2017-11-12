from flask import Flask, redirect, request, url_for
from flask import render_template
from journals_data import JOURNALS_DATA

app = Flask(__name__)

@app.route("/")
def home():
	return render_template('index.html')

@app.route('/journals')
def journals():
    return render_template('/journals.html', journals_data=JOURNALS_DATA)

@app.route('/visual-essays/overview')
def essays_overview():
	return render_template('visual-essays/overview.html')

@app.route('/visual-essays/essay-1')
def essay_one():
        return render_template('visual-essays/essay-1.html')

@app.route('/visual-essays/essay-2')
def essay_two():
        return render_template('visual-essays/essay-2.html')

@app.route('/visual-essays/essay-3')
def essay_three():
        return render_template('visual-essays/essay-3.html')

@app.route('/visualizations/database')
def database():
	return render_template('visualizations/database.html')

if __name__ == '__main__':
	app.run()
