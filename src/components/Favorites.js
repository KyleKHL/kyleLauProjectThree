// Favorites.js

const Favorites = (props) => {
    return (
        <section className="favoritesSection">
            <div className="wrapper">
                <h2>Favorite Dishes</h2>

                { props.favRecipeList.length > 0 ? null : <h3>Add some recipes to your favorites!</h3> }

                <ul className="listOfFavorites">
                    {props.favRecipeList.map((favRecipe) => {

                        // destructure
                        const {title, altText, image, url} = favRecipe.name

                        return(
                        <li key={favRecipe.key}>
                            <h3>{title}</h3>
                            <img src={image} alt={altText} />
                            <div className="favBookmarkButtonContainer">
                                <a target={"_blank"} href={url}>Read More</a>
                                <button onClick={() => props.removeClickHandler(favRecipe.key)}>
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