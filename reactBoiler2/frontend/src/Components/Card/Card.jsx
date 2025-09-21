import React from "react";
import './Card.css'

const buildingAddresses = {
  "Allen Hall": "3941 O'Hara St, Pittsburgh, PA 15213",  
  "Alumni Hall": "4227 Fifth Ave, Pittsburgh, PA 15260",  
  "Barco Law Building": "3900 Forbes Ave, Pittsburgh, PA 15260",  
  "Bellefield Hall": "315 S. Bellefield Ave, Pittsburgh, PA 15260",  
  "Bendm": "UNKNOWN_ADDRESS",  
  "Cathedral of Learning": "4200 Fifth Ave, Pittsburgh, PA 15260",  
  "Chevron Hall": "219 Parkman Ave, Pittsburgh, PA 15260",  
  "Clapp Hall": "UNKNOWN_ADDRESS",  
  "Eberly Hall": "200 University Dr, Pittsburgh, PA 15260",  
  "Frick Fine Arts Building": "650 Schenley Dr, Pittsburgh, PA 15260",  
  "Information Sciences Building": "135 N. Bellefield Ave, Pittsburgh, PA 15260",  
  "Langley Hall": "Fifth and Ruskin, Pittsburgh, PA 15260",  
  "Lawrence Hall": "3942 Forbes Ave, Pittsburgh, PA 15260",  
  "Mervis Hall": "Roberto Clemente Dr, Pittsburgh, PA 15260",  
  "Music Building": "4337 Fifth Ave, Pittsburgh, PA 15260",  
  "Old Engineering Hall": "3943 O'Hara Street, Pittsburgh, PA 15213",  
  "Public Health Building": "Public Health Building, 130 De Soto St, Pittsburgh, PA 15261",  
  "Scaif Hall": "3550 Terrace Street, Pittsburgh, PA 15261",  
  "Sennot Square": "210 S. Bouquet St, Pittsburgh, PA 15260",  
  "Space Research Coordinator Center": "4107 O'Hara St, Pittsburgh, PA 15260",  
  "Thackery Hall": "139 University Place, Pittsburgh, PA 15260",  
  "Thaw Hall": "3943 O'Hara Street, Pittsburgh, PA 15260",  
  "Victoria Building": "3500 Victoria Street, Pittsburgh, PA 15213",  
  "Wesley W Posvar Hall": "230 S. Bouquet St, Pittsburgh, PA 15260"
};

function Card({ buildingName }){
  return(
    <div className="cardItem">
      <div className="upperPortion">
        <p>{buildingName}</p>
        <p>
          {buildingAddresses[buildingName] 
            ? buildingAddresses[buildingName] 
            : "Address not found"}
        </p>
      </div>
      <div className="middlePortion">
        <div className="information">
          <img className="card-Pic" src="./public/pittLogo.png" alt={buildingName}></img>
          <h2>Click To View Room Info</h2>
        </div>
      </div>
    </div> 
  )
}

export default Card
