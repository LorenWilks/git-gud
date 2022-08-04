import React from "react";
import { useParams } from "react-router-dom"
import { Image, Item } from 'semantic-ui-react'

function GameDetails({ games }) {

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
                        <Item.Image className="border-line" size='large' src={game.image} />

                        <Item.Content>
                            <h2><strong>{game.name}</strong></h2>
                            <span><b>Genre:</b> {game.genre}</span>
                            <br></br>
                            <span><b>Description:</b> {game.description}</span>
                            <br></br>
                            <span><b>In-game Screenshots:</b></span>
                                <Image size="large" src={game.screenshots} />
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
                           <div>
                                <ul>
                                   <b>Reviews:</b>
                                    {game.reviews.map((review, index) => {
                                        return (
                                            <li key={index}>{review}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Item.Content>
                    </Item>
                </Item.Group>
                </div>)
                : 
                <div className="error-message">
                    <h1>404 Game NOT found!</h1>
                    <img src="https://c.tenor.com/eDchk3srtycAAAAj/piffle-error.gif" alt="Error gif"/>
                </div>}
        </div>
    )
}

export default GameDetails