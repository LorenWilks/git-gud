import React from 'react'
import { Card } from 'semantic-ui-react'

const AboutUsCard = ({ imageURL, description, name, feat }) => (
        <Card >
            <div className="card-img-container">
            <img className="DevImage"src={imageURL} wrapped ui={false} alt="Developer"/>
            </div>
            <Card.Content className="Content">
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <span className='feat'>{feat}</span>
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
            
        </Card>
)

export default AboutUsCard