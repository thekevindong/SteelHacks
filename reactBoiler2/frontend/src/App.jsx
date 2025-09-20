import { useState } from 'react'
import { useEffect } from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Header/Card/Card.jsx'
import Footer from './Components/Header/Footer/footer.jsx'

import './App.css'

function App() {

  const [buildings, setBuildings] = useState([])

  // Fetch buildings from Flask API
  useEffect(() => {
    fetch('/api/buildings')
      .then((res) => res.json())
      .then((data) => setBuildings(data))
      .catch((err) => console.error("Error fetching buildings:", err))
  }, [])

  return (
    <>
      <div>
        <Header></Header>
        <div className='cardHolder'>
          {buildings.length > 0 ? (
            buildings.map((building, idx) => (
              <Card key={idx} buildingName={building} />
            ))
          ) : (
            <p>Loading buildings...</p>
          )}
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
