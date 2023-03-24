// RecipeGallery.js
import IndivRecipe from "./IndivRecipe.js";


const RecipeGallery = (props) => {

    // console.log(props.recipeArray)

    return(
        <section>
            <ul>
                {/* map through the array */}
                {props.recipeArray.map((individualRecipe) => {
                    return (
                        <IndivRecipe 
                        key = {crypto.randomUUID()}
                        title = {individualRecipe.recipe.label}
                        image = {individualRecipe.recipe.images.SMALL.url}
                        altText= {individualRecipe.recipe.label}
                        url= {individualRecipe.recipe.url}
                        
                        />
                    )
                })}

            </ul>
        </section>
    )
}

export default RecipeGallery;