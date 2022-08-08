import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, Input, Dropdown } from 'semantic-ui-react'
import { ThemeContext } from "../Context/ThemeContext";


function NavBar({ selectedGenres, setSelectedGenres, searchInput, setSearchInput, games, setGames }) {

  const [activeItem, setActiveItem] = useState("Home")
  const { isDarkMode } = useContext(ThemeContext)

  function hideSearchAndFilter () {
    return activeItem === "Home"
  }

  function handleSearchChange(event) {
    event.preventDefault();
    setSearchInput(event.target.value)
  }

  function handleSelectedChange (event, data) {
    setSelectedGenres(data.value)
  }
  
  const options = [
    { key: 'Action', text: 'Action', value: 'Action' },
    { key: 'Adventure', text: 'Adventure', value: 'Adventure' },
    { key: 'MOBA', text: 'MOBA', value: 'MOBA' },
    { key: 'FPS', text: 'FPS', value: 'FPS' },
    { key: 'Battle Royale Game', text: 'Battle Royale Game', value: 'Battle Royale Game' },
    { key: 'Fighting Game', text: 'Fighting Game', value: 'Fighting Game' },
    { key: 'MMORPG', text: 'MMORPG', value: 'MMORPG' },
    { key: 'RPG', text: 'RPG', value: 'RPG' },
    { key: 'Sports Game', text: 'Sports Game', value: 'Sports Game' },
    { key: 'Racing Game', text: 'Racing Game', value: 'Racing Game' },
    { key: 'Indie Game', text: 'Indie Game', value: 'Indie Game' },
    { key: 'Mobile Game', text: 'Mobile Game', value: 'Mobile Game' },
]

  return (
    <Menu className="nav" inverted={!isDarkMode}>
      <Menu.Item
        name="Home"
        active={activeItem === "Home"}
        onClick={() => setActiveItem("Home")}>
        <Link to="/"> Home </Link>
      </Menu.Item>
      <Menu.Item
        name="About Us"
        active={activeItem === "About Us"}
        onClick={() => setActiveItem("About Us")}>
        <Link to="/about"> About Us </Link>
      </Menu.Item>
      <Menu.Item
        name="Add Game"
        active={activeItem === "Add Game"}
        onClick={() => setActiveItem("Add Game")}>
        <Link to="/addgame"> Add Game </Link>
      </Menu.Item>
      {hideSearchAndFilter() ? 
      (<>
      <Menu.Item>
        <Input
          name="search"
          icon='search'
          placeholder='Search...'
          onChange={handleSearchChange} />
      </Menu.Item>
      <Menu.Item>
        <Dropdown 
          placeholder='Genres' 
          fluid multiple selection options={options}
          onChange={(e, data) => handleSelectedChange(e, data)}
          value={selectedGenres} />
      </Menu.Item>
      </>) : null}
      
    </Menu>
      
  )
}

export default NavBar