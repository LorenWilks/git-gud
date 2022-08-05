import React from 'react'
import AboutUsCard from './AboutUsCard'
import Floredeliza from "../image/Flordeliza.jpg"
import Jenipher from "../image/Jenipher.jpg"
import Loren from "../image/Loren.jpg"
import { Card } from 'semantic-ui-react'

const AboutUs = () => (
    <Card.Group className="cardGroup" itemsPerRow={3}>
        <AboutUsCard
            className="FlordelizaCard"
            name="Flordeliza"
            imageURL={Floredeliza}
            feat="She loves to carry the enemy team as an ADC."
            description="Mae => A full-stack software developer noobie from East Bay, California. Casual Summoner.  Xayah main. Die-hard Cloud9 LoL fan. #GGEZ"
        />
        <AboutUsCard
            className="JenipherCard"
            imageURL={Jenipher}
            name="Jenipher"
            feat="Acquired the Hand of Ragnaros in WoW Classic"
            description="Jenipher is a full stack software engineer based in Denver. She is an avid gamer and programmer."
        />
        <AboutUsCard
            className="LorenCard"
            imageURL={Loren}
            name="Loren"
            feat="Born in '85...Beat Legend of Zelda in '92"
            description="Loren is a full stack software engineer living in Denver. Gaming has played a huge part in his desire to program. His excitement of beating a level or progressing in a game has been surpassed, but not overshadowed, by the pursuit of a programming repertoire."
        />
    </Card.Group>
)

export default AboutUs