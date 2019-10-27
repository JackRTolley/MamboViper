#!flask/bin/python
from flask import Flask, request
from flask import jsonify
from main import *

from twilio.rest import Client
from twilio import twiml

from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
@cross_origin()
def index():
    subreddit = request.args.get('subreddit')
    return jsonify(CommentGenerator().run(subreddit))



if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")