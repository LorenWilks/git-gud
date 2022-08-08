import React, { useState } from "react";
import ReactStars from "react-rating-stars-component"


function Ratings({ game }) {
    const [rate, setRate] = useState(game["rating system"])


    function handleChangeRate(newRating) {

        fetch(`http://localhost:3001/games/${game.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "rating system": newRating
            }),
        })
            .then((r) => r.json())
            .then((rate) => {
                setRate(newRating)
            })
    }

    return (
        <div>
            <ReactStars
                count={5}
                onChange={handleChangeRate}
                value={rate}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
        </div>
    )
}




export default Ratings