import { useState } from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Header/Card/Card.jsx'

import './App.css'
import Footer from './Components/Header/Footer/footer.jsx'

function App() {

  return (
    <>
      <div>
        <Header></Header>
        <div className='cardHolder'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
