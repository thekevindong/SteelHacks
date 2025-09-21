import React, { useEffect, useState } from "react";
import "./Modal.css";

function Modal({ building, onClose }) {
  const [rooms, setRooms] = useState([]);
  const [roomStatus, setRoomStatus] = useState({});
  const [roomSessions, setRoomSessions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!building) return;

    const now = new Date();
    console.log("System time:", now.toString());

    // Step 1: Fetch rooms first and render immediately
    fetch(`/api/buildings/${encodeURIComponent(building)}/rooms`)
      .then((res) => res.json())
      .then((roomData) => {
        setRooms(roomData); // Immediate rendering
        return roomData;
      })
      .then((roomData) => {
        // Step 2: Bulk-fetch all sessions for the building
        fetch(`/api/buildings/${encodeURIComponent(building)}/sessions`)
          .then((res) => res.json())
          .then((allSessions) => {
            const sessionsByRoom = {};
            roomData.forEach((room) => {
              // Filter sessions for this room
              const roomSessions = allSessions
                .filter((s) => s.room_number === room)
                .map((session) => {
                  const [month, day, year] = session.date.split("/").map(Number);
                  const [startTime, endTime] = session.timeFrame.split(" - ");
                  const [startHour, startMinute] = startTime.split(":").map(Number);
                  const [endHour, endMinute] = endTime.split(":").map(Number);
                  const fullYear = year < 100 ? 2000 + year : year;
                  const startDate = new Date(fullYear, month - 1, day, startHour, startMinute);
                  const endDate = new Date(fullYear, month - 1, day, endHour, endMinute);
                  console.log(
                    `Room ${room} session: ${startDate.toString()} - ${endDate.toString()}, now: ${now.toString()}`
                  );
                  return { ...session, startDate, endDate };
                });
              sessionsByRoom[room] = roomSessions;

              // Determine if currently occupied
              const isOccupied = roomSessions.some((s) => now >= s.startDate && now <= s.endDate);
              setRoomStatus((prev) => ({ ...prev, [room]: isOccupied }));
            });
            setRoomSessions(sessionsByRoom);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Error fetching sessions:", err);
            setLoading(false);
          });
      });
  }, [building]);

  // Click handler for alerts
  const handleRoomClick = (room) => {
    const now = new Date();
    const sessions = roomSessions[room] || [];
    const futureSessions = sessions.filter((s) => s.endDate > now).sort((a, b) => a.startDate - b.startDate);

    if (!futureSessions.length) {
      alert(`Room ${room} has no more scheduled classes.`);
      return;
    }

    const currentSession = futureSessions.find((s) => now >= s.startDate && now <= s.endDate);
    if (currentSession) {
      alert(
    `This room will be occupied until ${currentSession.endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} by ${currentSession.class_type}`
      );
    } else {
      const nextSession = futureSessions[0];
      alert(
        `This room will be free until ${nextSession.startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} on ${nextSession.startDate.toLocaleDateString()}`
      );
    }

  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{building}</h2>

        <p style={{ fontSize: "0.8rem", color: "#555", marginTop: "10px" }}>
          *All times are shown in 24-hour format
        </p>

        {rooms.length === 0 ? (
          <p>No rooms found for this building.</p>
        ) : (
          <ul className="list">
            {rooms.map((room, idx) => (
              <li
                key={idx}
                className="list-item"
                style={{
                  color: roomStatus[room] === undefined ? "gray" : roomStatus[room] ? "red" : "green",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => handleRoomClick(room)}
              >
                Room {room} {roomStatus[room] === undefined ? "(loading...)" : roomStatus[room] ? "(Occupied)" : "(Free)"}
              </li>
            ))}
          </ul>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
