// Form.js

const Form = (props) => {

    return (
        <section className="formSection">
            <div className="wrapper">
                <form onSubmit={props.handleSubmit}>
                    {/* error message */}
                    {/* <p>Sorry! Unfortunately with the free version of the API, there can only be 10 API calls a minute . . .  please wait a minute for more API calls to get those tasty recipes! </p> */}
                    <label htmlFor="userInput"></label>
                    <input 
                        type="text" 
                        id="userInputOne"
                        name="inputOne"
                        placeholder="Ingredient #1"
                        onChange={props.handleChange}
                        // value={props.typedIngredValue}
                        value={props.inputValue.inputOne}
                        required
                    />
                    <label htmlFor="userInputTwo"></label>
                    <input 
                        type="text" 
                        id="userInputTwo"
                        name="inputTwo"
                        placeholder="Optional: Ingredient #2"
                        onChange={props.handleChange}
                        value={props.inputValue.inputTwo}
                    />
                    <label htmlFor="userInputThree"></label>
                    <input
                        type="text"
                        id="userInputThree"
                        name="inputThree"
                        placeholder="Optional: Ingredient #3"
                        onChange={props.handleChange}
                        value={props.inputValue.inputThree}
                    />

                    <select 
                    name="selectMealType" 
                    id="mealType" 
                    onChange={props.handleChange}
                    value={props.inputValue.selectMealType}
                    required
                    >
                        <option value="" disabled>Meal Type:</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Brunch">Brunch</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                        <option value="Teatime">Tea Time</option>
                    </select>

                    <select
                        name="cuisineType"
                        id="enterCuisineType"
                        onChange={props.handleChange}
                        value={props.inputValue.cuisineType}
                        required
                    >
                        <option value="" disabled>Cuisine:</option>
                        <option value="American">American</option>
                        <option value="Asian">Asian</option>
                        <option value="British">British</option>
                        <option value="Caribbean">Caribbean</option>
                        <option value="Central Europe">Central Europe</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Eastern Europe">Eastern Europe</option>
                        <option value="French">French</option>
                        <option value="Indian">Indian</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Kosher">Kosher</option>
                        <option value="Mediterranean">Mediterranean</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Middle Eastern">Middle Eastern</option>
                        <option value="Nordic">Nordic</option>
                        <option value="South American">South American</option>
                        <option value="South East Asian">South East Asian</option>
                    </select>

                    <button>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Form;