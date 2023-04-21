// UserSearch.js
import Form from "./Form.js";
import RecipeGallery from "./RecipeGallery.js";
import Favorites from "./Favorites.js";
import Bookmark from "./Bookmark.js";
import ErrorPage from "./ErrorPage.js";

// import Route
import { Link, Route, Routes } from "react-router-dom";


// import firebase & modules:
import firebaseInfo from "../firebase.js";
import { getDatabase, ref, onValue, remove } from "firebase/database";
// import react hooks
import { useState, useEffect } from "react";



const UserSearch = () => {
    
    // 1a) initialize state for recipe data returned from API
    const [ recipe, setRecipe ] = useState([]);

    // 1b) initialize state for API request error
    const [ apiError, setApiError ] = useState(false);

    // 1c) initialize state for when no results come back from API
    const [ apiNoResultError, setApiNoResultError ] = useState(false);

    const [bigSearch, setBigSearch] = useState(false);
    const bigSearchHandler = () => {
        setBigSearch(!bigSearch)
    }

    const [ loadingState, setLoadingState ] = useState(false);


    // function to remove bookmarked items
    const removeBookmarkedClickHandler = (recipeId) => {
        // reference to the key
        const database = getDatabase(firebaseInfo);
        const dbRef = ref(database, `bookmark/${recipeId}`)
        // firebase method to remove()
        remove(dbRef)
    }

    // create default values to ALL inputfields 
    const initialValues = {
        inputOne: '',
        inputTwo: '',
        inputThree: '',
        selectMealType: '',
        cuisineType: '',
    }
    // 1c) initialize state for userInput for ingredient inputs
    const [values, setValues] = useState(initialValues)

    // 3. define submit event handler - to be passed down into Form.js
    const handleSubmit = (event) => {
        event.preventDefault();
        // call function to fetch data from API
        if(bigSearch === false){
            fetchRecipeDataOne()
        }else{
            fetchRecipeDataFull()
        }
    }
    // 4. handleChange function to allow react to control input state
    const handleChange = (event) => {

        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value,
        });
    };
// ******
    // 2. fetch data from API
    const fetchRecipeDataOne = () => {
        // construct URL
        const appId = process.env.REACT_APP_API_ID;
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = new URL('https://api.edamam.com/api/recipes/v2');
        url.search = new URLSearchParams({
            app_id: appId,
            app_key: apiKey,
            type: 'public',
            q: `${values.inputOne}`,
            random: true,
        })

        // fetch recipe data
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(res);
                }
            })
            .then((apiData) => {
                const apiArray = apiData.hits;
                apiArray.splice(9, 11);

                if (apiArray.length === 0) {
                    setApiNoResultError(true)
                } else {
                    setApiNoResultError(false)
                }
                // update recipe state:
                setRecipe(apiArray);
                // update apiError as false
                setApiError(false);
                // set values back to normal
                setValues(initialValues)
            })
            .catch((error) => {
                // update apiError as true
                setApiError(true)
                // update the recipe state to empty array
                setRecipe([])
                // set values back to normal
                setValues(initialValues)
            })
    }

    // 2. fetch data from API
    const fetchRecipeDataFull = () => {
        // construct URL
        const appId = process.env.REACT_APP_API_ID;
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = new URL('https://api.edamam.com/api/recipes/v2');
        url.search = new URLSearchParams({
            app_id: appId,
            app_key: apiKey,
            type: 'public',
            q: `${values.inputOne} ${values.inputTwo} ${values.inputThree}`,
            mealType: values.selectMealType,
            cuisineType: values.cuisineType,
            random: true,
        })

        // fetch recipe data
        fetch(url)
            .then((res) => {
                if (res.ok){
                    return res.json();
                }else{
                    throw new Error(res);
                }
            })
            .then((apiData) => {
                const apiArray = apiData.hits;
                apiArray.splice(9, 11);

                if (apiArray.length === 0){
                    setApiNoResultError(true)
                } else {
                    setApiNoResultError(false)
                }
                // update recipe state:
                setRecipe(apiArray);
                // update apiError as false
                setApiError(false);
                // set values back to normal
                setValues(initialValues)
            })
            .catch((error) => {
                // update apiError as true
                setApiError(true)
                // update the recipe state to empty array
                setRecipe([])
                // set values back to normal
                setValues(initialValues)
            })
    }

    return(
        <>
        {/* pass down error state to form */}
        {/* pass down handleSubmit callback function to form */}
        <section className="errorSection">
            {apiError === true ?
                <div className="wrapper ">
                    <p className="errorMessage">Sorry! The API call was unsuccessful! The free version of the API only has 10 calls a minute. Please wait a minute to search for more recipes!</p>
                </div> 
                : null}
            { apiNoResultError === true ?
                <div className="wrapper">
                        <p className="errorMessage">Sorry, your search returned <span className="noResultsText">no results</span>. Please try again!</p>
                </div>
                : null}
        </section>
            <Form 
                errorState = {apiError}
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                inputValue = {values}
                bigSearch = {bigSearch}
                bigSearchHandler={bigSearchHandler}
            />

            <nav className="menu">
                <div className="wrapper">
                    <ul className="menuList">
                        <li>
                            <Link className="menuItem resultsPage" to="/">Results</Link>
                        </li>
                        <li>
                            <Link className="menuItem favoritesPage" to="/favorites">Favorites</Link>
                        </li>
                        <li>
                            <Link className="menuItem bookmarkPage" to="/bookmark">Bookmark</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route 
                    path="/" 
                    element={ <RecipeGallery 
                                recipeArray={recipe} 
                                /> } 
                />
                <Route 
                    path="/favorites" 
                    element={<Favorites />} 
                />
                <Route 
                    path="/bookmark" 
                    element={<Bookmark />} 
                />
                <Route 
                    path="*"
                    element={<ErrorPage/>}
                
                />
            </Routes>
            
            
        </>
    )
}

export default UserSearch;