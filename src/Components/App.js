import React, { useState, useEffect } from "react"
import GamesPage from "./GamesPage"
import NavBar from "./NavBar"
import AddGame from "./AddGame"
import AboutUs from "./AboutUs"
import Header from "./Header"
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

  function handleAddGame(newGame) {
    setGames([...games, newGame])
  }

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
          setSelectedGenres={setSelectedGenres} />
        <Switch>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <AddGame addingGame={handleAddGame}/>
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
