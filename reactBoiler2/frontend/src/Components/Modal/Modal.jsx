import React, { useEffect, useState } from "react";
import "./Modal.css";

function Modal({ building, onClose }) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!building) return;

    setLoading(true);
    fetch(`/api/buildings/${encodeURIComponent(building)}/rooms`)
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching rooms:", err);
        setLoading(false);
      });
  }, [building]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{building}</h2>

        {loading ? (
          <p>Loading rooms...</p>
        ) : rooms.length > 0 ? (
          <ul className="list">
            {rooms.map((room, idx) => (
              <li key={idx} className="list-item">
                Room {room}
              </li>
            ))}
          </ul>
        ) : (
          <p>No rooms found for this building.</p>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
