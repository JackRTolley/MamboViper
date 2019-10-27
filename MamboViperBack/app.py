#!flask/bin/python
from flask import Flask, request
from flask import jsonify
from main import *

app = Flask(__name__)

@app.route('/')
def index():
    subreddit = request.args.get('subreddit')
    return jsonify(CommentGenerator().run(subreddit))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')