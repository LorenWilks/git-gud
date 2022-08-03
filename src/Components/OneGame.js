// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import { Card, Image } from 'semantic-ui-react'

function OneGame({ game }) {
    const {
        // screenshots, 
        reviews,
        // genre, 
        // image, 
        id
    } = game

    const [isCardDescriptionClicked, setIsCardDescriptionClicked] = useState(false)
    const [userReview, setUserReview] = useState("")
    const [listOfReviews, setListOfReviews] = useState(reviews)

    function handleCardDescriptionClick(e) {
        setIsCardDescriptionClicked(!isCardDescriptionClicked)
    }

    const addReview = (e) => {
        e.preventDefault()
        const postReqObj = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json",
            },
            body: JSON.stringify({
                "reviews": [...listOfReviews, userReview],
            })
        }
        fetch(`http://localhost:3001/games/${id}`, postReqObj)
            .then((res) => res.json())
            .then((updatedGame) => {
                setListOfReviews(updatedGame.reviews)
                setUserReview("")
            })
    }
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
                {isCardDescriptionClicked ?
                    <Card.Description >
                        Reviews:
                        <br></br>
                        <ul>
                            {listOfReviews.map((review, index) => {
                                return (
                                    <li key={index}>{review}</li>
                                )
                            })}
                        </ul>
                        <br></br>
                        <form
                            onSubmit={addReview}
                        >
                            <label>Add Your Review!</label>
                            <input type="text"
                                name="reviews"
                                placeholder="Add Review"
                                value={userReview}
                                onChange={(e) => setUserReview(e.target.value)}
                            />
                            <input type="submit" />
                        </form>
                        <br></br>
                        <div onClick={handleCardDescriptionClick}>
                            Platforms: {game.platforms.join(", ")}
                        </div>
                    </Card.Description>
                    : <Card.Description onClick={handleCardDescriptionClick}>
                        Description: {game.description}
                    </Card.Description>}
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