from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId

# --- Flask app setup ---
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# --- MongoDB setup ---
client = MongoClient("mongodb://localhost:27017/")  # change if using Atlas
db = client["your_database_name"]  # replace with your DB name
buildings_collection = db["buildings"]

# --- Helper function to convert ObjectId ---
def serialize_building(building):
    building["_id"] = str(building["_id"])
    return building

# --- Routes ---

# Add a new building
@app.route("/addBuilding", methods=["POST"])
def add_building():
    data = request.json
    if not data or "building_name" not in data:
        return jsonify({"error": "Missing building_name"}), 400

    result = buildings_collection.insert_one(data)
    return jsonify({"inserted_id": str(result.inserted_id)}), 201

# Remove a building by ID
@app.route("/removeBuilding/<id>", methods=["DELETE"])
def remove_building(id):
    try:
        result = buildings_collection.delete_one({"_id": ObjectId(id)})
        if result.deleted_count == 0:
            return jsonify({"error": "Building not found"}), 404
        return jsonify({"deleted_count": result.deleted_count})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Get all buildings
@app.route("/getBuildings", methods=["GET"])
def get_buildings():
    buildings = list(buildings_collection.find())
    buildings = [serialize_building(b) for b in buildings]
    return jsonify(buildings)

# Get a single building by ID (optional)
@app.route("/getBuilding/<id>", methods=["GET"])
def get_building(id):
    try:
        building = buildings_collection.find_one({"_id": ObjectId(id)})
        if not building:
            return jsonify({"error": "Building not found"}), 404
        return jsonify(serialize_building(building))
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# --- Run the app ---
if __name__ == "__main__":
    app.run(debug=True)
