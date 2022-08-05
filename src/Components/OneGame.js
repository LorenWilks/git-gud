import React, { useState } from "react";
import Review from "./Review";
import { Card } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"

function OneGame({ game }) {

    const [isCardMetaClicked, setIsCardMetaClicked] = useState(false)
    
    let history = useHistory();

    function handleClickGameCard(gameId) {
        history.push(`/game/${gameId}`);
    }

    return (
        <Card>
            <div className="card-img-container">
                <img 
                    className="card-img"
                    src={game.image}  
                    onClick={() => handleClickGameCard(game.id)} size="medium"
                    alt="game"/>
            </div>
            <Card.Content>
                <Card.Header>{game.name}</Card.Header>
                <Card.Meta className="pointer" onClick={() => setIsCardMetaClicked(!isCardMetaClicked)}>
                    <span className="genre-font-color">
                        Genre: <b>{game.genre}</b>
                    </span>
                </Card.Meta>
                {isCardMetaClicked ? (
                    <Review 
                        game={game} />
                ) : null}
            </Card.Content>
        </Card>

    )
}

export default OneGame