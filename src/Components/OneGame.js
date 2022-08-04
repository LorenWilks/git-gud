// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import { Card, Image } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"

function OneGame({ game }) {
    const {
        reviews,
        id
    } = game

    const [isCardMetaClicked, setIsCardMetaClicked] = useState(false)
    const [userReview, setUserReview] = useState("")
    const [listOfReviews, setListOfReviews] = useState(reviews)

    let history = useHistory();

    function handleClickGameCard(gameId) {
        history.push(`/game/${gameId}`);
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
            <Image src={game.image} wrapped ui={false} onClick={() => handleClickGameCard(game.id)} />
            <Card.Content onClick={() => setIsCardMetaClicked(!isCardMetaClicked)}>
                <Card.Header>{game.name}</Card.Header>
                <Card.Meta >
                    <span className="genre-font-color">
                        Genre: {game.genre}
                    </span>
                </Card.Meta>
                {isCardMetaClicked ? (
                    <div>
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
                            onSubmit={addReview}>

                            <label>Add Your Review!</label>
                            <input type="text"
                                name="reviews"
                                placeholder="Add Review"
                                value={userReview}
                                onChange={(e) => setUserReview(e.target.value)} />
                            <input type="submit" />
                        </form>
                        <br></br>
                </div>
                ) : null}
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