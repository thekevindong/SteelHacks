from flask import Flask, request, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow requests from React (running on localhost:5173)

MAX_TEXT_SIZE = 1024
JSON_FILE = 'messages.json'

try:
    with open(JSON_FILE, 'r') as file:
        content = file.read()
        messages = json.loads(content) if content else []
except (FileNotFoundError, json.JSONDecodeError):
    messages = []


@app.route('/upload', methods=['POST'])
def upload_stuff():
    global messages
    data = request.json
    to_be_uploaded = data.get('text', '')

    if len(to_be_uploaded.encode('utf-8')) > MAX_TEXT_SIZE:
        return jsonify(
            {"error": f"Text size exceeds the limit of {MAX_TEXT_SIZE} bytes"}
        ), 400

    messages.insert(0, to_be_uploaded)

    with open(JSON_FILE, 'w') as file:
        json.dump(messages, file)

    return jsonify({"message": "Uploaded successfully"})


@app.route('/fetch', methods=['GET'])
def fetch_stuff():
    global messages
    message_num = int(request.args.get('messageNum', 0))

    if 0 <= message_num < len(messages):
        fetched_message = messages[message_num]
    else:
        fetched_message = "Invalid message index number"

    return jsonify({"text": fetched_message})


@app.route('/fetch_all', methods=['GET'])
def fetch_all():
    global messages
    return jsonify(messages)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
