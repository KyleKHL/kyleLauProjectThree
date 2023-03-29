// Bookmark.js

const Bookmark = (props) => {
    return(
        <section className="bookmarksSection">
            <div className="wrapper">
                <h2>Bookmarked Recipes</h2>

                {props.bookmarkRecipeList.length > 0 ? null : <h3>Add some recipes to your bookmarked list!</h3>}

                <ul className="listOfBookmarks">
                    {props.bookmarkRecipeList.map((bookmarkRecipe) => {
                        return(
                            <li key={bookmarkRecipe.key}>
                                <h3>{bookmarkRecipe.name.title}</h3>
                                <img src={bookmarkRecipe.name.image} alt={bookmarkRecipe.name.altText} />
                                <div className="favBookmarkButtonContainer">
                                    <a target={"_blank"} href={bookmarkRecipe.name.url}>Read More</a>
                                    <button onClick={() => props.removeClickHandler(bookmarkRecipe.key)}> 
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

export default Bookmark;