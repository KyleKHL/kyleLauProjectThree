// IndivRecipe.js

const IndivRecipe = (props) => {

    return(
        <li>
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.altText} />
            <a target={"_blank"} href={props.url}>Link to Recipe</a>
            <button onClick={props.favoriteClickHandler}>💖</button>
            <button onClick={props.bookmarkClickHandler}>🔖</button>
        </li>
    )
}

export default IndivRecipe;