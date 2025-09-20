import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Modal from "./Components/Modal/Modal.jsx";

import "./App.css";

function App() {
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch buildings from Flask API
  useEffect(() => {
    fetch("/api/buildings")
      .then((res) => res.json())
      .then((data) => setBuildings(data))
      .catch((err) => console.error("Error fetching buildings:", err));
  }, []);

  // Filter buildings based on search term
  const filteredBuildings = buildings.filter((b) =>
    b.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />

      {/* Search bar */}
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search buildings…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="cardHolder">
        {filteredBuildings.length > 0 ? (
          filteredBuildings.map((building, idx) => (
            <div
              key={idx}
              className="infoLink"
              onClick={() => setSelectedBuilding(building)}
            >
              <Card buildingName={building.name} />
            </div>
          ))
        ) : (
          <p>No buildings found.</p>
        )}
      </div>

      {/* Modal shows when a building is clicked */}
      {selectedBuilding && (
        <Modal
          building={selectedBuilding}
          onClose={() => setSelectedBuilding(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
