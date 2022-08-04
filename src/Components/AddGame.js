import { useState } from "react"
import { Dropdown } from "semantic-ui-react"

function AddGame ({ 
    addingGame, 
    selectedPlatforms, 
    selectedAddGenres, 
    setSelectedAddGenres, 
    setSelectedPlatforms}) {
    
    //console.table(games.genre)
   const [name, setName] = useState("")
   const [description, setDescription] = useState("")
   const [review, setReview] = useState("")
   const [image, setImage] = useState("")

   function handleSelectedPlatforms (event, data) {
    setSelectedPlatforms(data.value)
   }

   function handleSelectedAddGenres (event, data) {
    setSelectedAddGenres(data.value)
   }

   function handleSubmit (e) {

    e.preventDefault()
    fetch("http://localhost:3001/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "description": description,
            "reviews": review.length === 0 ? [] : [review],
            "image": image,
            "genre": selectedAddGenres,
            "platforms": [selectedPlatforms]
        }),
    })
        .then((r) => r.json())
        .then((newGame) => {addingGame(newGame)})
   }

   const genres = [
    { key: 'MOBA', text: 'MOBA', value: 'MOBA' },
    { key: 'FPS', text: 'FPS', value: 'FPS' },
    { key: 'Battle Royale Game', text: 'Battle Royale Game', value: 'Battle Royale Game' },
    { key: 'Fighting Games', text: 'Fighting Games', value: 'Fighting Games' },
    { key: 'MMORPG', text: 'MMORPG', value: 'MMORPG' },
    { key: 'Sports Game', text: 'Sports Game', value: 'Sports Game' },
    { key: 'Racing Game', text: 'Racing Game', value: 'Racing Game' },
    { key: 'Indie Game', text: 'Indie Game', value: 'Indie Game' },
    { key: 'Mobile Game', text: 'Mobile Game', value: 'Mobile Game' },
    ]

    const platform = [
        {key: 'Andriod', text:'Android', value:'Android'},
        {key: 'Arcade', text: 'Arcade', value:'Arcade'},
        {key: 'Gameboy', text: 'Gameboy', value: 'Gameboy'},
        {key: 'iSO', text: 'iSO', value: 'iSO'},
        {key: 'Linux', text: 'Linux', value: 'Linux'},
        {key: 'Amazon Luna', text: 'Amazon Luna', value: 'Amazon Luna'},
        {key: 'ChromeOS', text: 'ChromeOS', value:'ChromeOS'},
        {key: 'Dreamcast', text: 'Dreamcast', value: 'Dreamcast'},
        {key: 'Fire OS', text: 'Fire OS', value: 'Fire OS'},
        {key: 'Gamecube', text: 'Gamecube', value: 'Gamecube'},
        {key: 'iPadOS', text: 'iPadOS', value: 'iPadOS'},
        {key: 'iQue Player', text: 'iQue Player', value: 'iQue Player'},
        {key: 'Mac OS X', text: 'Mac OS X', value: 'Mac OS X'},
        {key: 'macOS', text: 'macOS', value: 'macOS'},
        {key: 'Microsoft Windows', text: 'Microsoft Windows', value: 'Microsoft Windows'},
        {key: 'Mobile Phone', text: 'Mobile Phone', value: 'Mobile Phone'},
        {key: 'N-Gage', text: 'N-Gage', value:'N-Gage'},
        {key: 'Nintendo 3DS', text: 'Nintendo 3DS', value: 'Nintendo 3DS'},
        {key: 'Nintendo 64', text: 'Nintendo 64', value: 'Nintendo 64'},
        {key: 'Nintendo DS', text: 'Nintendo DS', value: 'Nintendo DS'},
        {key: 'Nintendo Switch', text: 'Nintendo Switch', value: 'Nintendo Switch'},
        {key: 'PS', text: 'PS', value: 'PS'},
        {key: 'PS Portable', text: 'PS Portable', value: 'PS Portable'},
        {key: 'PS Vita', text: 'PS Vita', value: 'PS Vita'},
        {key: 'PS2', text: 'PS2', value: 'PS2'},
        {key: 'PS3', text: 'PS3', value: 'PS3'},
        {key: 'PS4', text: 'PS4', value: 'PS4'},
        {key: 'PS5', text: 'PS5', value: 'PS5'},
        {key: 'Sega Genesis', text: 'Sega Genesis', value: 'Sega Genesis'},
        {key: 'Sega Saturn', text: 'Sega Saturn', value: 'Sega Saturn'},
        {key: 'Stadia', text: 'Stadia', value: 'Stadia'},
        {key: 'Wii', text: 'Wii', value: 'Wii'},
        {key: 'Xbox', text: 'Xbox', value: 'Xbox'},
        {key: 'Xbox 360', text: 'Xbox 360', value: 'Xbox 360'},
        {key: 'Xbox One', text: 'Xbox One', value: 'Xbox One'},
        {key: 'Xbox Cloud Gaming', text: 'Xbox Cloud Gaming', value: 'Xbox Cloud Gaming'}

    ]

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="name"
                placeholder="Game name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input type="text"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <input type="text"
                name="review"
                placeholder="Review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                />
                <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                <Dropdown 
                    placeholder='Genres' 
                    fluid selection options={genres} 
                    onChange={(e, data) => handleSelectedAddGenres(e, data)}
                    value={selectedAddGenres} />
                <Dropdown 
                    placeholder='Platforms' 
                    fluid multiple selection options={platform} 
                    onChange={(e, data) => handleSelectedPlatforms(e, data)} 
                    value={selectedPlatforms} />
                <button 
                    type="submit" >
                        Add Game
                </button>
            </form>
        </div>
    )
}

export default AddGame