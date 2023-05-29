import React from 'react'

export default function Input({onSearch}) {

  const [planetName, setPlanetName] = React.useState("")

  function getPlanet() {
    onSearch(planetName)
  }
  return (
    <div className="input">

      <input 
        type="text" 
        placeholder='Planet' 
        value={planetName}
        onChange={(e) => setPlanetName(e.target.value)}/>

      <button className="search" onClick={getPlanet} >Search</button>
    </div>
  )
}