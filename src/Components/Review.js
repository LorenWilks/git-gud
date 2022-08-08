import React, { useState, useContext } from "react";
import { Segment, Input, Form, TextArea } from 'semantic-ui-react'
import { ThemeContext } from "../Context/ThemeContext";


function Review({ game }) {

    const [listOfReviews, setListOfReviews] = useState(game.reviews)
    const [userReview, setUserReview] = useState("")
    const { isDarkMode } = useContext(ThemeContext)

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
        fetch(`http://localhost:3001/games/${game.id}`, postReqObj)
            .then((res) => res.json())
            .then((updatedGame) => {
                setListOfReviews(updatedGame.reviews)
                setUserReview("")
            })
    }

    return (
        <div>
            Reviews:
            <ul>
                {listOfReviews.map((review, index) => {
                    return (
                        <li key={index}>{review}</li>
                    )
                })}
            </ul>
            <form
                onSubmit={addReview}>
                <label>Add Your Review!</label>
                <Segment inverted={isDarkMode}>
                    <Form>
                        <TextArea
                            inverted={isDarkMode}
                            type="text"
                            name="reviews"
                            placeholder="Add Review"
                            value={userReview}
                            onChange={(e) => setUserReview(e.target.value)} />
                        <Input type="submit" className="button-margin" />
                    </Form>
                </Segment>
            </form>
        </div>
    )
}

export default Review