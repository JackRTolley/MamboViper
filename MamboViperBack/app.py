#!flask/bin/python
from flask import Flask
from flask import jsonify
from main import *

app = Flask(__name__)

@app.route('/')
def index(request):
    subreddit = request.args.get("subreddit")
    return jsonify(CommentGenerator().run([subreddit]))

if __name__ == '__main__':
    app.run(debug=True)