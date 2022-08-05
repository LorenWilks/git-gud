import React, { useContext } from "react";
import Review from "./Review";
import GitGUDDark from "../image/GitGUDDark.png"
import GitGUDLight from "../image/GitGUDLight.png"
import { useParams } from "react-router-dom"
import { Image, Item } from 'semantic-ui-react'
import { ThemeContext } from "../Context/ThemeContext";

function GameDetails({ games }) {

    const { isDarkMode } = useContext(ThemeContext)

    const params = useParams();
    const gameId = parseInt(params.id)
    const game = games.find(game => game.id === gameId)

    return (
        <div>
            {game !== undefined ?
                (
                    <div className="game-body">
                        <Item.Group>
                            <Item >
                                <Item.Image size='large' src={game.image} />
                                <Item.Content>
                                    <h2><strong>{game.name}</strong></h2>
                                    <div className="text-margin">
                                        <span><b>Genre:</b> {game.genre}</span>
                                    </div>
                                    <div className="text-margin">
                                        <span><b>Description:</b> {game.description}</span>
                                    </div>
                                    <div className="text-margin">
                                        <span><b>In-Game Screenshots:</b></span>
                                        <div className="text-margin">
                                            <Image size="large" src={game.screenshots} />
                                        </div>
                                    </div>
                                    <div>
                                        <ul>
                                            <b>Platforms:</b>
                                            {game.platforms.map((platform, index) => {
                                                return (
                                                    <li key={index}>{platform}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <Review game={game} />
                                </Item.Content>
                            </Item>
                        </Item.Group>
                        <div className="logo-bottom-right">
                            <img
                                className="logo-size"
                                src={isDarkMode ? GitGUDDark : GitGUDLight}
                                alt="Git Gud Logo (Light)"
                                id="main-header" />
                            {/* <button onClick={() => toggleIsDarkMode(!isDarkMode)}></button> */}
                        </div>
                    </div>)
                :
                <div className="error-message">
                    <h1>404 Game NOT found!</h1>
                    <img src="https://c.tenor.com/eDchk3srtycAAAAj/piffle-error.gif" alt="Error gif" />
                </div>}
        </div>
    )
}

export default GameDetails