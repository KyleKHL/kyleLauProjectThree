// Favorites.js

const Favorites = (props) => {
    return (
        <section className="favoritesSection">
            <div className="wrapper">
                <h2>Favorite Dishes:</h2>
                <ul className="listOfFavorites">
                    {props.favRecipeList.map((favRecipe) => {
                        return(
                        <li key={favRecipe.key}>
                            <h3>{favRecipe.name.title}</h3>
                            <img src={favRecipe.name.image} alt={favRecipe.name.altText} />
                            <a target={"_blank"} href={favRecipe.name.url}>Link to Recipe</a>
                                <button onClick={() => props.removeClickHandler(favRecipe.key)}>❌</button>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Favorites;