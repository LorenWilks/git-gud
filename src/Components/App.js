import React, {useState, useEffect} from "react"
import GamesPage from "./GamesPage"

function App() {

const [games, setGames] = useState ([])

useEffect (() => {
    fetch("http://localhost:3001/games")
    .then(data => data.json())
    .then (data => setGames(data))
}, [])

  return (
   <GamesPage games={games} />
  )
}

export default App;
