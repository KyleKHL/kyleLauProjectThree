// RecipeGallery.js
import IndivRecipe from "./IndivRecipe.js";

// import firebase & modules:
import firebaseInfo from "../firebase.js";
import { getDatabase, ref, push } from "firebase/database";


const RecipeGallery = (props) => {
    
    return(
        <>
            <section className="recipeGallerySection">
                <div className="wrapper">
                    <h2>Search Results:</h2>
                    
                    {props.recipeArray.length > 0 ? null : <h3> Get started by searching for recipes using the form above! </h3>}
                    
                    <ul className="recipeGallery">

                        {/* map through the array */}
                        {props.recipeArray.map((individualRecipe) => {
                            
                            // destructure individualRecipe.recipe
                            const { label, images, url } = individualRecipe.recipe;

                            const favoriteClickHandler = () => {
                                const favRecipeObj = {
                                    title: label,
                                    image: images.SMALL.url,
                                    altText: label,
                                    url: url,
                                }
                                // reference to database
                                const database = getDatabase(firebaseInfo);
                                const dbRef = ref(database, `favorites`);
                                // push indivRecipe state variable into database
                                push(dbRef, favRecipeObj)
                            }
                            
                            const bookmarkClickHandler = () => {
                                const bookmarkRecipeObj = {
                                    title: label,
                                    image: images.SMALL.url,
                                    altText: label,
                                    url: url,
                                }
                                // reference to database
                                const database = getDatabase(firebaseInfo);
                                const dbRef = ref(database, `bookmark`);
                                // push indivRecipe state variable into database
                                push(dbRef, bookmarkRecipeObj)

                            }
                            
                            return (
                                <IndivRecipe 
                                key = {crypto.randomUUID()}
                                title = {label}
                                image = {images.SMALL.url}
                                altText= {label}
                                url= {url}
                                favoriteClickHandler = {favoriteClickHandler}
                                bookmarkClickHandler = {bookmarkClickHandler}

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