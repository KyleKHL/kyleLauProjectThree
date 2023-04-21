// Favorites.js
import firebaseInfo from "../firebase.js";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useState, useEffect } from "react";

const Favorites = ({removeClickHandler}) => {

    const [favData, setFavData] = useState([]);
    // fav data
    const database = getDatabase(firebaseInfo);
    // ref to fav data
    const favRef = ref(database, `favorites`);

    useEffect(() => {
        onValue(favRef, (dbResponse) => {
            const data = dbResponse.val();
            const favArray = []

            for (let key in data) {

                favArray.push({ key: key, name: data[key] })
            }
            setFavData(favArray)

        })
    }, [])

    // function to remove favorited items
    const removeHandler = (recipeId) => {
        // reference to the key
        const database = getDatabase(firebaseInfo);
        const dbRef = ref(database, `favorites/${recipeId}`)
        // firebase method to remove()
        remove(dbRef)
    }



    return (
        <section className="favoritesSection">
            <div className="wrapper">
                <h2>Favorite Dishes</h2>

                { favData.length > 0 ? null : <h3>Add some recipes to your favorites!</h3> }

                <ul className="listOfFavorites">
                    {favData.map((favRecipe) => {

                        const {title, altText, image, url} = favRecipe.name

                        return(
                        <li key={favRecipe.key}>
                            <h3>{title}</h3>
                            <img src={image} alt={altText} />
                            <div className="favBookmarkButtonContainer">
                                <a target={"_blank"} href={url}>Read More</a>
                                <button onClick={() => removeHandler(favRecipe.key)}>
                                    <span aria-label="Delete Recipe" >❌</span>
                                </button>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Favorites;