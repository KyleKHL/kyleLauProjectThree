// Bookmark.js
import firebaseInfo from "../firebase.js";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useState, useEffect } from "react";

const Bookmark = ({removeClickHandler}) => {

    const [bookmarkData, setBookmarkData] = useState([]);
    // fav data
    const database = getDatabase(firebaseInfo);
    // ref to fav data
    const bookmarkRef = ref(database, `bookmark`);

    useEffect(() => {
        onValue(bookmarkRef, (dbResponse) => {
            const data = dbResponse.val();
            const bookmarkArray = []

            for (let key in data) {
                
                bookmarkArray.push({ key: key, name: data[key] })
            }
            setBookmarkData(bookmarkArray)

        })
    }, [])

    // function to remove bookmarked items
    const removeHandler = (recipeId) => {
        // reference to the key
        const database = getDatabase(firebaseInfo);
        const dbRef = ref(database, `bookmark/${recipeId}`)
        remove(dbRef)
    }

    return(
        <section className="bookmarksSection">
            <div className="wrapper">
                <h2>Bookmarked Recipes</h2>

                {bookmarkData.length > 0 ? null : <h3>Add some recipes to your bookmarked list!</h3>}

                <ul className="listOfBookmarks">
                    {bookmarkData.map((bookmarkRecipe) => {
                        const { title, image, altText, url } = bookmarkRecipe.name;

                        return(
                            <li key={bookmarkRecipe.key}>
                                <h3>{title}</h3>
                                <img src={
                                    image ? image : <p>Check out this delicious food!</p>
                                } alt={altText} />
                                
                                <div className="favBookmarkButtonContainer">
                                    <a target={"_blank"} href={url}>Read More</a>
                                    <button onClick={() => removeHandler(bookmarkRecipe.key)}> 
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

export default Bookmark;