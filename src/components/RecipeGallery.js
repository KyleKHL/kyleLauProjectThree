// RecipeGallery.js
import Bookmark from './Bookmark.js';
import Favorites from './Favorites.js';
import IndivRecipe from "./IndivRecipe.js";

// import firebase & modules:
import firebaseInfo from "../firebase.js";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";


const RecipeGallery = (props) => {

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
        </>
    )
}

export default RecipeGallery;