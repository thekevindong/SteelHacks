import json

# --- CONFIGURATION ---
input_file = "allen-2.json"   # Change to your JSON file
output_file = "allen-2_flattened.json"

# --- LOAD THE ORIGINAL JSON ---
with open(input_file, "r") as f:
    data = json.load(f)

flattened = []

# --- FLATTEN THE DATA ---
building_name = data.get("building_name", "")

for room in data.get("rooms", []):
    room_number = room.get("room_number", "")
    for cls in room.get("classes", []):
        class_type = cls.get("class_type", "")
        for schedule in cls.get("schedules", []):
            flattened_record = {
                "building_name": building_name,
                "room_number": room_number,
                "class_type": class_type,
                "date": schedule.get("date", ""),
                "timeFrame": schedule.get("timeFrame", "")
            }
            flattened.append(flattened_record)

# --- SAVE FLATTENED JSON ---
with open(output_file, "w") as f:
    json.dump(flattened, f, indent=2)

print(f"Flattened JSON saved to {output_file}")
