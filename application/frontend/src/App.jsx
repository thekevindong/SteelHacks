import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card.jsx'
import Footer from './Components/Footer/footer.jsx'
import Modal from './Components/Modal/Modal.jsx'

import './App.css'

function App() {
  const [buildings, setBuildings] = useState([])
  const [selectedBuilding, setSelectedBuilding] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  // Fetch buildings from Flask API
  useEffect(() => {
    fetch('/api/buildings')
      .then((res) => res.json())
      .then((data) => setBuildings(data))
      .catch((err) => console.error("Error fetching buildings:", err))
  }, [])

  // Filter buildings by search term
  const filteredBuildings = buildings.filter((building) =>
    building.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      {/* Pass searchTerm + handler down to Header */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="cardHolder">
        {filteredBuildings.length > 0 ? (
          filteredBuildings.map((building, idx) => (
            <div
              key={idx}
              className="infoLink"
              onClick={() => setSelectedBuilding(building)}
            >
              <Card buildingName={building} />
            </div>
          ))
        ) : (
          <p>No buildings found.</p>
        )}
      </div>

      {selectedBuilding && (
        <Modal
          building={selectedBuilding}
          onClose={() => setSelectedBuilding(null)}
        />
      )}

      <div id="page-footer">
        <Footer/>
      </div>
    </div>
  )
}

export default App
