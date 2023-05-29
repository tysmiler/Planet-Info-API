import './App.css';
import PlanetCard from './Components/PlanetCard';
import Input from './Components/Input';
import React from 'react';

function App() {
    const [planetName, setPlanetName] = React.useState("")
    const [planetData, setPlanetData] = React.useState([])
    const [showData, setShowData] = React.useState(false)
    
    React.useEffect(() => {
      if (planetName) {
        fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
          headers: {
            'X-Api-Key': 'LwEPx4auQbq4SkET27bqyQ==Eg0L3dCBxLRlbChb'
          }
        })
        .then(response => response.json())
        .then(json => {
          if (json.length > 0) {
            const planet = json[0];
            setPlanetData({
              name: planet.name,
              mass: planet.mass,
              radius: planet.radius,
              orbit: planet.orbit,
              temperature: planet.temperature,
              period: planet.period
            });
          }
        });
      }
      
    }, [planetName,showData]);
    
    function getPlanetName(planetName) {
      setPlanetName(planetName)
      if (planetName === null) return
      if(planetData.name){
        setShowData(true)
      }
      
    }
    
    

   

  return (
    <div className="app">
      <Input 
      onSearch={getPlanetName}
      />
      {showData && <PlanetCard 
      data={planetData}
      value={planetData}
      />}
    </div>

  )
}

export default App;
