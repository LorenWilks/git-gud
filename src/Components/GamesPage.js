import React from "react";
import { Card } from "semantic-ui-react";
import OneGame from "./OneGame"


function GamesPage ({ games }) {

const gameCards = games.map(game => {
    return (
        <OneGame key={game.id} game={game}/>
    )
})

return (
    <Card.Group itemsPerRow={4}>
        {gameCards}
    </Card.Group>
    )
}

export default GamesPage