from flask import Flask, jsonify, send_from_directory, request
import os
import json
import subprocess
import glob
import time

# ------------------ CONFIG ------------------

# Base directory of this file
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Absolute paths
FRONTEND_DIR = os.path.normpath(os.path.join(BASE_DIR, "../frontend"))
BUILD_DIR = os.path.join(FRONTEND_DIR, "dist")
DATA_DIR = os.path.normpath(os.path.join(BASE_DIR, "../data"))

# Optional: sanity check
if not os.path.exists(FRONTEND_DIR):
    raise FileNotFoundError(f"Frontend directory not found: {FRONTEND_DIR}")
if not os.path.exists(DATA_DIR):
    raise FileNotFoundError(f"Data directory not found: {DATA_DIR}")

# ------------------ FLASK APP ------------------
app = Flask(__name__, static_folder=BUILD_DIR, static_url_path="")

# ------------------ LOAD ALL JSON DATA ------------------
def load_all_data():
    all_data = []
    for filepath in glob.glob(os.path.join(DATA_DIR, "*.json")):
        try:
            with open(filepath) as f:
                all_data.extend(json.load(f))
        except Exception as e:
            print(f"Error loading {filepath}: {e}")
    return all_data

all_data = load_all_data()

# ------------------ API ENDPOINTS ------------------
@app.route("/api/buildings", methods=["GET"])
def get_buildings():
    buildings = sorted(list({item['building_name'] for item in all_data}))
    return jsonify(buildings)

@app.route("/api/buildings/<building_name>/rooms", methods=["GET"])
def get_rooms(building_name):
    rooms = sorted(list({item['room_number'] for item in all_data if item['building_name'] == building_name}))
    return jsonify(rooms)

@app.route("/api/buildings/<building_name>/rooms/<room_number>/classes", methods=["GET"])
def get_classes(building_name, room_number):
    classes = sorted(list({item['class_type'] for item in all_data
                          if item['building_name'] == building_name and item['room_number'] == room_number}))
    return jsonify(classes)

@app.route("/api/schedule", methods=["GET"])
def get_schedule():
    building_name = request.args.get("building_name")
    room_number = request.args.get("room_number")
    class_type = request.args.get("class_type")

    if not building_name or not room_number or not class_type:
        return jsonify({"error": "Missing query parameters"}), 400

    sessions = [{"date": item["date"], "timeFrame": item["timeFrame"]}
                for item in all_data
                if item["building_name"] == building_name
                and item["room_number"] == room_number
                and item["class_type"] == class_type]

    return jsonify(sessions)

# ------------------ BUILD FRONTEND ------------------
def build_frontend():
    print("Building React frontend...")
    try:
        # npm install
        subprocess.run("npm install", cwd=FRONTEND_DIR, check=True, shell=True)
        # npm run build
        subprocess.run("npm run build", cwd=FRONTEND_DIR, check=True, shell=True)
        print("Frontend built successfully.")
    except subprocess.CalledProcessError as e:
        print("Error building frontend:", e)
        exit(1)


# ------------------ SERVE REACT FRONTEND ------------------
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

# ------------------ RUN ------------------
if __name__ == "__main__":
    # Start building the frontend after Flask API is ready
    # Give Flask a tiny delay to start serving (optional)
    time.sleep(1)
    build_frontend()
    
    print("Starting Flask server to serve both API and React frontend...")
    app.run(debug=True)
