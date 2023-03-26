// UserSearch.js
import Form from "./Form.js";
import RecipeGallery from "./RecipeGallery.js";
import Favorites from "./Favorites.js";
import Bookmark from "./Bookmark.js";

// import Route
import { Link, Route, Routes, Outlet } from "react-router-dom";


// import firebase & modules:
import firebaseInfo from "../firebase.js";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";
// import react hooks
import { useState, useEffect } from "react";



const UserSearch = () => {
    
    // 1a) initialize state for recipe data returned from API
    const [ recipe, setRecipe ] = useState([]);

    // 1b) initialize state for API request error
    const [ apiError, setApiError ] = useState(false);

    // DB A) create state for favorited recipes
        const [favData, setFavData] = useState([])
    // B) create state for bookmarked recipes
        const [bookmarkData, setBookmarkData] = useState([])

    // start of firebase
    useEffect(() => {

        const database = getDatabase(firebaseInfo);
        // reference to favorite obj
        const favDBRef = ref(database, `favorites`)
        // reference to bookmark obj
        const bookmarkDBRef = ref(database, `bookmark`)

        onValue(favDBRef, (dbResponse) => {
            
            // empty array for favorites page
            const favArray = [];

            const favRecipeData = dbResponse.val();
            
            for (let key in favRecipeData) {
                // favArray.push(favRecipeData[key])
                favArray.push({ key: key, name: favRecipeData[key] })
            }
            setFavData(favArray)

        })

        onValue(bookmarkDBRef, (dbResponse) => {

            // empty array for favorites page
            const bookmarkArray = [];

            const bookmarkRecipeData = dbResponse.val();
            
            for (let key in bookmarkRecipeData) {

                bookmarkArray.push({ key: key, name: bookmarkRecipeData[key] })
            }
            setBookmarkData(bookmarkArray)

        })

    }, [])
        // end of firebase

    // function to remove favorited items
    const removeFavClickHandler = (recipeId) => {
        // reference to the key
        const database = getDatabase(firebaseInfo);
        const dbRef = ref(database, `favorites/${recipeId}`)

        // firebase method to remove()
        remove(dbRef)
    }

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
        fetchRecipeData()
    }
    // 4. handleChange function to allow react to control input state
    const handleChange = (event) => {
        // if(event.target.value === ''){
        //     setIngredInputOne('');
        // }

        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value,
        });

        // setIngredInputOne(event.target.value.trim());
    };

    // 2. fetch data from API
    const fetchRecipeData = () => {
        // construct URL
        const appId = 'fc3a2a4e';
        const apiKey = '5fabaeb42a0ec8a788b0ba21d8c502ef';
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
                apiArray.splice(10, 10)
                // update recipe state:
                setRecipe(apiArray)
                // update apiError as false
                setApiError(false)
            })
            .catch((error) => {
                // update apiError as true
                setApiError(true)
                // update the recipe state to empty array
                setRecipe([])
            })

    }

    return(
        <>
        {/* pass down error state to form */}
        {/* pass down handleSubmit callback function to form */}
            <Form 
                errorState = {apiError}
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                inputValue = {values}
            />

            <nav className="menu">
                <ul className="menuList">
                    <li>
                        <Link to="/">Search</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/bookmark">Bookmark</Link>
                    </li>
                </ul>
            </nav>

            <RecipeGallery recipeArray = {recipe} />
            {/* should I put */}
            <Favorites 
            favRecipeList={favData}
            removeClickHandler={removeFavClickHandler}
            />
            
            <Bookmark 
            bookmarkRecipeList={bookmarkData}
            removeClickHandler={removeBookmarkedClickHandler}
            />
        </>
    )
}

export default UserSearch;