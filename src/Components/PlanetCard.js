import React from 'react'



function PlanetCard(props) {
  return(
    <div className="planet-card">
      <div className="top">
        <div className="name">{props.data.name}</div>
      </div>
      <div className="info">
        <div className="mass">Mass: {props.data.mass}</div>   
        <div className="radius">Radius: {props.data.radius} </div>
        <div className="orbit-time">Orbit time: {props.data.period} days</div>
        <div className="temperature">Surface Temperature: {props.data.temperature}°K</div>

      </div>
          
      
    </div>
  )
}

export default PlanetCard
