// Form.js

const Form = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {/* error message */}
            {/* <p>Sorry! Unfortunately with the free version of the API, there can only be 10 API calls a minute . . .  please wait a minute for more API calls to get those tasty recipes! </p> */}
            <label htmlFor="userInput"></label>
            <input 
                type="text" 
                id="userInput"
                onChange={props.handleChange}
                value={props.typedIngredValue}
            />
            <button>Submit</button>
        </form>
    )
}

export default Form;