import React, { useState, useEffect } from "react"
import GamesPage from "./GamesPage"
import NavBar from "./NavBar"
import AboutUs from "./AboutUs"
import Header from "./Header"
import GameDetails from "./GameDetails"
import AddGame from "./AddGame"
import { ThemeContext } from "../Context/ThemeContext"
import { Route, Switch } from "react-router-dom";


function App() {

  const [games, setGames] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedGenres, setSelectedGenres] = useState([])
  const [selectedPlatforms, setSelectedPlatforms] = useState([])
  const [selectedAddGenres, setSelectedAddGenres] = useState("")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

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

  function handleMenu() {
    setIsMenuClicked(!isMenuClicked)
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
      <ThemeContext.Provider value={{ isDarkMode: isDarkMode }}>
        <NavBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          games={games}
          setGames={setGames}
        />
      </ThemeContext.Provider>
      <Switch>
        <Route exact path="/about">
          <ThemeContext.Provider value={{ isDarkMode: isDarkMode }}>
            <AboutUs />
          </ThemeContext.Provider>
        </Route>
        <Route path="/game/:id">
          <ThemeContext.Provider value={{ isDarkMode: isDarkMode }}>
            <GameDetails games={games} />
          </ThemeContext.Provider>
        </Route>
        <Route exact path="/addgame">
        <ThemeContext.Provider value={{ isDarkMode: isDarkMode }}>
          <AddGame
            addingGame={handleAddGame}
            selectedPlatforms={selectedPlatforms}
            selectedAddGenres={selectedAddGenres}
            setSelectedPlatforms={setSelectedPlatforms}
            setSelectedAddGenres={setSelectedAddGenres}
            handleMenu={handleMenu}
            isMenuClicked={isMenuClicked} />
        </ThemeContext.Provider>
        </Route>
        <Route exact path="/">
          <GamesPage
            games={games}
            searchInput={searchInput}
            selectedGenres={selectedGenres} />
        </Route>
      </Switch>

    </div>
  )
}

export default App;
