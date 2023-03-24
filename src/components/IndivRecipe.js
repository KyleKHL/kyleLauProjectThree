// IndivRecipe.js

const IndivRecipe = (props) => {
    // console.log(props)
    return(
        <li>
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.altText} />
            <a target={"_blank"} href={props.url}>Link to Recipe</a>
            <button>💖</button>
            <button>🔖</button>
        </li>
    )
}

export default IndivRecipe;