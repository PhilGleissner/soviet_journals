from flask import Flask, redirect, request, url_for
from flask import render_template

app = Flask(__name__)

@app.route("/")
def home():
	return render_template('index.html')

@app.route('/visualizations/database')
def database():
	return render_template('visualizations/database.html')

if __name__ == '__main__':
	app.run()