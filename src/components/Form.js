// Form.js
const Form = ({handleSubmit, handleChange, inputValue, bigSearch, bigSearchHandler}) => {

    return (
        <section className="formSection">
            <div className="wrapper">
                <form className="ingredientForm" onSubmit={handleSubmit}>
                    <label htmlFor="userInputOne" className="sr-only">Enter Ingredient #1</label>
                    <input 
                        type="text" 
                        id="userInputOne"
                        name="inputOne"
                        placeholder="Ingredient #1"
                        onChange={handleChange}
                        value={inputValue.inputOne}
                        required
                    />
                    { bigSearch ?
                    <>
                    <label htmlFor="userInputTwo" className="sr-only">Optional: Enter Ingredient #2</label>
                    <input 
                        type="text" 
                        id="userInputTwo"
                        name="inputTwo"
                        placeholder="Optional: Ingredient #2"
                        onChange={handleChange}
                        value={inputValue.inputTwo}
                    />
                    <label htmlFor="userInputThree" className="sr-only">Optional: Enter Ingredient #3</label>
                    <input
                        type="text"
                        id="userInputThree"
                        name="inputThree"
                        placeholder="Optional: Ingredient #3"
                        onChange={handleChange}
                        value={inputValue.inputThree}
                    />

                    <label htmlFor="mealType" className="sr-only">Select Meal Type:</label>
                    <select 
                    name="selectMealType" 
                    id="mealType" 
                    onChange={handleChange}
                    value={inputValue.selectMealType}
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

                    <label htmlFor="enterCuisineType" className="sr-only">Select Meal Type:</label>
                    <select
                        name="cuisineType"
                        id="enterCuisineType"
                        onChange={handleChange}
                        value={inputValue.cuisineType}
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
                        </>
                    :
                    null}

                    <button>Submit</button>
                </form>
                <button className="advSearch" onClick={bigSearchHandler}>Refine</button>
            </div>
        </section>
    )
}

export default Form;