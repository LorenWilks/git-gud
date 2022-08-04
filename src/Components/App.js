import React, { useState, useEffect } from "react"
import GamesPage from "./GamesPage"
import NavBar from "./NavBar"
import AboutUs from "./AboutUs"
import Header from "./Header"
import GameDetails from "./GameDetails"
import { ThemeContext } from "../Context/ThemeContext"
import { Route, Switch } from "react-router-dom";


function App() {

  const [games, setGames] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedGenres, setSelectedGenres] = useState([])
  

  function toggleMode() {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then(data => data.json())
      .then(data => setGames(data))
  }, [])

 

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <label className="switch">
        <input
          type="checkbox"
          onClick={toggleMode} />
        <span className="slider round"> </span>
      </label>
      <ThemeContext.Provider value={{ isDarkMode: isDarkMode }}>
        <Header />
      </ThemeContext.Provider>
      <NavBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres} 
        games={games}
        setGames={setGames}
        />
      <Switch>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route path="/game/:id">
          <GameDetails games={games} />
        </Route>
        <Route exact path="/">
          <GamesPage
            games={games}
            searchInput={searchInput}
            selectedGenres={selectedGenres} />
        </Route>
        {/* <Route path="/login">
            <Login />
          </Route> */}
      </Switch>

    </div>
  )
}

export default App;
