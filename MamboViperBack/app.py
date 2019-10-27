#!flask/bin/python
from flask import Flask
from flask import jsonify
from main import *

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify(CommentGenerator().run())

if __name__ == '__main__':
    app.run(debug=True)