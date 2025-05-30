import { useEffect, useState } from 'react'
import './App.css'
async function fecthplayerSchema() {
  // GET request to weather api for lat, lon in San Mateo
  try {
    const data = await fetch("http://localhost:3000/players")
    console.log(data)
    return data.json()  
  } catch (e) {
    console.log(e)
  }
}

function App() {
  const [playerslist, setPlayerslist] = useState([])


  useEffect(() => {
    let ignore = false;
    fecthplayerSchema().then(data => {
  
        if (!ignore) {
          setPlayerslist(data)
        }
      }
    )
    
    return () => {
      ignore = true;
    }
  }, [playerslist])

  
  const headerStyle = 'header'
  console.log(playerslist)
  return (
    <div className="game">
        {/* <div>
      <h1 className={headerStyle}>Dashboard</h1>
      <h3>Name: {playerslist[0].name}</h3>
      <h3>Position: {playerslist[0].position}</h3>
      <h3>TestData: {playerslist[0].team}</h3>
      <h3>Age: {playerslist[0].age}</h3>
      </div> */}
    {playerslist.map(player=>{
        return(
        <div>
            <h1 className={headerStyle}>Dashboard</h1>
            <h3>Name: {player.name}</h3>
            <h3>Position: {player.position}</h3>
            <h3>TestData: {player.team}</h3>
            <h3>Age: {player.age}</h3>
        </div>
    )})}
    </div>
)}

export default App
//HI 

