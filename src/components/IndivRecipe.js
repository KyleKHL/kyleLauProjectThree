// IndivRecipe.js

const IndivRecipe = (props) => {

    return(
        <li>
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.altText} />
            <a target={"_blank"} href={props.url}>Read More</a>
            <div className="buttonContainer">
                <button onClick={props.favoriteClickHandler}>
                    <span aria-label="Favorite Recipe">💖</span>
                </button>
                <button onClick={props.bookmarkClickHandler}>
                    <span aria-label="Bookmark Recipe">📙</span> 
                </button>
            </div>
        </li>
    )
}

export default IndivRecipe;