// RecipeGallery.js
import IndivRecipe from "./IndivRecipe.js";


const RecipeGallery = (props) => {

    // console.log(props.recipeArray)

    return(
        <section className="recipeGallerySection">
            <div className="wrapper">
                <ul className="recipeGallery">
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
            </div>
        </section>
    )
}

export default RecipeGallery;