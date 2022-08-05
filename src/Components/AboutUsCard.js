import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const AboutUsCard = ({ imageURL, description, name, feat }) => (
        <Card className={name}>
            <Image className="DevImage"src={imageURL} wrapped ui={false} />
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