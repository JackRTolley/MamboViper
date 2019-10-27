#!flask/bin/python
from flask import Flask, request, redirect
from flask import jsonify
from main import *

from twilio.twiml.messaging_response import Body, Message, Redirect, MessagingResponse
import time

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
    result = CommentGenerator().run(subreddit)
    print(result)

    message = client.messages \
                .create(
                    body = result["comments"],
                    from_="441274451650",
                    to=request.args.get("phone_number")
                )

    return jsonify({
        "content": "An Internet Game for Horrible Devs",
    })


@app.route('/smsReturnService')
@cross_origin()
def smsReturnService():
    for i in range(10):
        client = Client(account_sid, auth_token)
        subreddit = request.args.get('subreddit')
        result = CommentGenerator().run(subreddit)
        print(result)

        message = client.messages \
                    .create(
                        body = result["comments"],
                        from_="441274451650",
                        to=request.args.get("phone_number")
                    )
        time.sleep(5)


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
