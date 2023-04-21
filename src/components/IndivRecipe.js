// IndivRecipe.js

const IndivRecipe = ({ title, image, altText, url, favoriteClickHandler, bookmarkClickHandler }) => {

    return(
        <li>
            <h3>{title}</h3>
            <img src={image} alt={altText} />
            <a target={"_blank"} href={url}>Read More</a>
            <div className="buttonContainer">
                <button onClick={favoriteClickHandler}>
                    <span aria-label="Favorite Recipe">💖</span>
                </button>
                <button onClick={bookmarkClickHandler}>
                    <span aria-label="Bookmark Recipe">📙</span> 
                </button>
            </div>
        </li>
    )
}

export default IndivRecipe;