// Bookmark.js

const Bookmark = (props) => {
    return(
        <section className="bookmarksSection">
            <div className="wrapper">
                <h2>Bookmarked Recipes</h2>
                <ul className="listOfBookmarks">
                    {props.bookmarkRecipeList.map((bookmarkRecipe) => {
                        return(
                            <li key={bookmarkRecipe.key}>
                                <h3>{bookmarkRecipe.name.title}</h3>
                                <img src={bookmarkRecipe.name.image} alt={bookmarkRecipe.name.altText} />
                                <a target={"_blank"} href={bookmarkRecipe.name.url}>Link to Recipe</a>
                                <button onClick={() => props.removeClickHandler(bookmarkRecipe.key)}>❌</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Bookmark;