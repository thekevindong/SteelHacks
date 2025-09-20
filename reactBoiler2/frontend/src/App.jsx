import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card.jsx'
import Footer from './Components/Footer/footer.jsx'
import Modal from './Components/Modal/Modal.jsx'

import './App.css'

function App() {
  const [buildings, setBuildings] = useState([])
  const [selectedBuilding, setSelectedBuilding] = useState(null)

  // Fetch buildings from Flask API
  useEffect(() => {
    fetch('/api/buildings')
      .then((res) => res.json())
      .then((data) => setBuildings(data))
      .catch((err) => console.error("Error fetching buildings:", err))
  }, [])

  return (
    <div>
      <Header />

      <div className="cardHolder">
        {buildings.length > 0 ? (
          buildings.map((building, idx) => (
            <div
              key={idx}
              className="infoLink"
              onClick={() => setSelectedBuilding(building)}
            >
              <Card buildingName={building} />
            </div>
          ))
        ) : (
          <p>Loading buildings...</p>
        )}
      </div>

      
      {selectedBuilding && (
        <Modal building={selectedBuilding} onClose={() => setSelectedBuilding(null)} />
      )}

      <Footer />
    </div>
  )
}

export default App
