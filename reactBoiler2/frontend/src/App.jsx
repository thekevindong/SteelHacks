import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import Messages from './Components/Messages/Messages' //for flask backend

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="p-4">
        <Messages /> {/* todo, Flask integration goes here */}
      </div>
    </>
  )
}

export default App
