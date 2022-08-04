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
                (<Item.Group>
                    <Item>
                        <Item.Image size='large' src={game.image} />

                        <Item.Content>
                            <Item.Header as='a'>{game.name}</Item.Header>
                            <br></br>
                            <span>Genre: {game.genre}</span>
                            <br></br>
                            <Item.Meta>Description: {game.description}</Item.Meta>
                            <Item.Description>
                                In-game Screenshots:
                                <Image size="large" src={game.screenshots} />
                            </Item.Description>
                            <Item.Extra>
                                <ul>
                                    Platforms:
                                    {game.platforms.map((platform, index) => {
                                        return (
                                            <li key={index}>{platform}</li>
                                        )
                                    })}
                                </ul>
                            </Item.Extra>
                            <Item.Extra>
                            <ul>
                                   Reviews:
                                    {game.reviews.map((review, index) => {
                                        return (
                                            <li key={index}>{review}</li>
                                        )
                                    })}
                                </ul>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>)
                : <h1>404 Game NOT found!</h1>}
        </div>
    )
}

export default GameDetails