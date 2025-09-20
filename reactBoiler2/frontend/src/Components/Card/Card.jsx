import React from "react";
import './Card.css'

function Card({ buildingName }){
  return(
    <div className="cardItem">
      <div className="upperPortion">
        <img className="card-Pic"src="./public/pittLogo.png" alt={buildingName} />
        <p>{buildingName}</p>
        <p>Location: 3941 O'Hara St, Pittsburgh, PA 15213</p>
        <p>Availible</p>
      </div>
      <div className="middlePortion">
        <div className="information">
          <p>Amenities:</p>
          <ul className="listItems">
            <li>Wi-Fi</li>
            <li>Seating</li>
            <li>White-Boards</li>
            <li>Airconditioning</li>
          </ul>

          <h2>Availible From:</h2>
        </div>
      </div>
    </div>
  )
}

export default Card