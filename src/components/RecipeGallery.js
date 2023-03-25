// RecipeGallery.js
import Bookmark from './Bookmark.js';
import Favorites from './Favorites.js';
import IndivRecipe from "./IndivRecipe.js";
// import useEffect and useState
import { useEffect, useState } from "react";

// import firebase & modules:
import firebaseInfo from "../firebase.js";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";


const RecipeGallery = (props) => {
    // setState for favorites data
    const [ favData, setFavData ] = useState([])

    // start of firebase
    useEffect(() => {

        const database = getDatabase(firebaseInfo);
        const dbRef = ref(database)

        onValue(dbRef, (dbResponse) => {
            
            // empty array for favorites page
            const favArray = [];

            const favRecipeData = dbResponse.val();
            
            for (let key in favRecipeData) {
                // favArray.push(favRecipeData[key])
                favArray.push( {key: key, name: favRecipeData[key]} )
            }
            console.log(favArray)
            setFavData(favArray)
            
        })

    }, [])
        // end of firebase

    // function to remove items
    const removeClickHandler = (recipeId) => {
        // reference to the key
        const database = getDatabase(firebaseInfo);
        const dbRef = ref(database, `/${recipeId}`)

        // firebase method to remove()
        remove(dbRef)
    }

    return(
        <>
            <section className="recipeGallerySection">
                <div className="wrapper">
                    <ul className="recipeGallery">
                        {/* map through the array */}
                        {props.recipeArray.map((individualRecipe) => {

                            const favoriteClickHandler = () => {
                                
                                const favRecipeObj = {
                                    title: individualRecipe.recipe.label,
                                    image: individualRecipe.recipe.images.SMALL.url,
                                    altText: individualRecipe.recipe.label,
                                    url: individualRecipe.recipe.url,
                                }
                                // reference to database
                                const database = getDatabase(firebaseInfo);
                                const dbRef = ref(database);
                                // push indivRecipe state variable into database
                                push(dbRef, favRecipeObj)

                            }


                            return (
                                <IndivRecipe 
                                key = {crypto.randomUUID()}
                                title = {individualRecipe.recipe.label}
                                image = {individualRecipe.recipe.images.SMALL.url}
                                altText= {individualRecipe.recipe.label}
                                url= {individualRecipe.recipe.url}
                                favoriteClickHandler = {favoriteClickHandler}
                                />
                            )
                        })}

                    </ul>
                </div>
            </section>
            {/* favorites page */}
            <Favorites 
            favRecipeList = {favData}
            removeClickHandler={removeClickHandler}
            />
            {/* bookmark page */}
            <Bookmark 
            

            />
        </>
    )
}

export default RecipeGallery;