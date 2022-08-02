import React from "react";
import { Card } from "semantic-ui-react";
import OneGame from "./OneGame"


function GamesPage({ selectedGenre, games, searchInput }) {

    const gameCards = games
        .filter(game => {
            const lowerCaseGameName = game.name.toLowerCase()
            const lowerCaseInput = searchInput.toLowerCase()

            return lowerCaseGameName.includes(lowerCaseInput)
        })
        .map(game => {
            return (
                <OneGame key={game.id} game={game} />
            )
        })
    return (
        <div>
            <Card.Group itemsPerRow={4}>
                {gameCards}
            </Card.Group>
        </div>
    )
}

export default GamesPage