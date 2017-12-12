from flask import Flask, redirect, request, url_for, send_from_directory
from flask import render_template
from flaskext.markdown import Markdown

app = Flask(__name__)
Markdown(app)

@app.route("/")
def home():
	return render_template('index.html')

@app.route('/journals')
def journals():
    return render_template('/journals.html')

@app.route('/visual-essays/overview')
def essays_overview():
	return render_template('visual-essays/overview.html')

@app.route('/visual-essays/essay-1')
def essay_one():
    content = ""
    with open("essays/essay-1.md", "r") as f:
        content = f.read()
        return render_template('visual-essays/essay-1.html', essay_1=content)

@app.route('/visual-essays/essay-2')
def essay_two():
    content = ""
    with open("essays/essay-2.md", "r") as f:
        content = f.read()
        return render_template('visual-essays/essay-2.html', essay_2=content)

@app.route('/visual-essays/essay-3')
def essay_three():
    content = ""
    with open("essays/essay-3.md", "r") as f:
        content = f.read()
        return render_template('visual-essays/essay-3.html', essay_3=content)

@app.route('/visualizations/database')
def database():
	return render_template('visualizations/database.html')

@app.route('/robots.txt')
def static_from_root():
        return send_from_directory(app.static_folder, request.path[1:])

if __name__ == '__main__':
	app.run()
