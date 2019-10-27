#!flask/bin/python
from flask import Flask, request, redirect
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

account_sid = "AC2470d0b52f42a90745b77bec451b7ec7"
auth_token = "dbf82fb8f77da28e5c4d03edc2756a9e"

@app.route('/smsService')
@cross_origin()
def smsService():
    client = Client(account_sid, auth_token)
    subreddit = request.args.get('subreddit')

    message = client.messages \
                .create(
                    body=CommentGenerator().run(subreddit).comments,
                    from_="+18152614761",
                    to=request.args.get("phone_number")
                )

    return jsonify({
        "content": "An Internet Game for Horrible Devs",
    })

"""
@app.route('/smsReturnService')
@cross_origin()
def smsReturnService():
    subreddit = request.args.get('subreddit')
    resp = twiml.Response()
    resp.message(CommentGenerator().run(subreddit))
"""


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
