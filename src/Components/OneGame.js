import React from "react";
import { Card, Image } from 'semantic-ui-react'

function OneGame ({ game }) {
    return (  
        <Card round="true">
            <Image src={game.image} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{game.name}</Card.Header>
            <Card.Meta>
                <span className="genre-font-color">
                    Genre: {game.genre}
                </span>
            </Card.Meta>
            <Card.Description>
                Description: {game.description}
            </Card.Description>
            </Card.Content>
            {/* <Card.Content extra>
            <a>
                <Icon name='user' />
                10 Friends
            </a>
            </Card.Content> */}
      </Card>
    )
}

export default OneGame