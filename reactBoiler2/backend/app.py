from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB Atlas connection
client = MongoClient("mongodb+srv://mango:mango1@cluster0.abcde.mongodb.net/myDatabase?retryWrites=true&w=majority")
db = client['university']
collection = db['schedules']

# Test route
@app.route('/')
def index():
    return "Flask + MongoDB Atlas is working!"

# Add a new schedule
@app.route('/add', methods=['POST'])
def add_schedule():
    data = request.json  # Expect JSON in request body
    collection.insert_one(data)
    return jsonify({"status": "success"}), 201

# Query schedules
@app.route('/query', methods=['GET'])
def query_schedule():
    building = request.args.get('building')
    room = request.args.get('room')
    query = {}
    if building: query['building_name'] = building
    if room: query['room_number'] = room
    results = list(collection.find(query, {"_id": 0}))
    return jsonify(results)

# Delete a schedule
@app.route('/delete', methods=['POST'])
def delete_schedule():
    data = request.json
    collection.delete_one(data)
    return jsonify({"status": "deleted"})

if __name__ == '__main__':
    app.run(debug=True)
