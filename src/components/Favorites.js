// Favorites.js

const Favorites = (props) => {
    return (
        <section className="favoritesSection">
            <div className="wrapper">
                <h2>Favorite Dishes:</h2>
                <ul className="listOfFavorites">
                    {props.favRecipeList.map((favRecipe) => {
                        return(
                        <li key={crypto.randomUUID()}>
                            <h3>{favRecipe.title}</h3>
                            <img src={favRecipe.image} alt={favRecipe.altText} />
                            <a target={"_blank"} href={favRecipe.url}>Link to Recipe</a>
                            <button>❌</button>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Favorites;