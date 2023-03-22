// Form.js

const Form = () => {
    // edaman recipe
    // const appId = 'fc3a2a4e';
    // const apiKey = '5fabaeb42a0ec8a788b0ba21d8c502ef';
    // const url = new URL('https://api.edamam.com/api/recipes/v2');	
    // url.search = new URLSearchParams({
    //     app_id: appId,
    //     app_key: apiKey,
    //     type: 'public',
    //     q: 'chicken',
    //     ing: 4-7,
    // })

    // fetch(url)
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((jsonData) => {
    //         console.log(jsonData)
    //     })

    const submitHandler = () => {

    }

    return (
        <form action="">
            <label htmlFor="userInput"></label>
            <input type="text" id="userInput" />
            <button onSubmit={submitHandler}>Submit</button>
        </form>
    )
}

export default Form;