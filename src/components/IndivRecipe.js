// IndivRecipe.js

const IndivRecipe = (props) => {
    return(
        <li>
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.altText} />
        </li>
    )
}

export default IndivRecipe;