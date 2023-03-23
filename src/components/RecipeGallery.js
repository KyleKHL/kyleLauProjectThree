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
                        image = {individualRecipe.recipe.image}
                        altText= {individualRecipe.recipe.label}
                        
                        />
                    )
                })}

            </ul>
        </section>
    )
}

export default RecipeGallery;