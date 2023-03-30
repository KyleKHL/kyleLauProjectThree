// Header.js

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <h1>Recipe Genius</h1>
                <div className="instructionContainer">
                    <p>Welcome to Recipe Genius, the app that transforms any ingredients you have into delicious recipes!</p>
                    <div className="instructionSet">
                        <p>Start by following these steps:</p>
                        <ol>
                            <li>Enter a minimum of one ingredient.</li>
                            <li>Select your preferred meal type and cuisine.</li>
                            <li>Click "Submit" to get a list of recipes.</li>
                        </ol>
                    </div>
                    <p>You can save recipes in the favorite and bookmark sections for easy access.</p>
                    <p>Let's get cooking with Recipe Genius!</p>
                </div>
            </div>
        </header>
        
    )
}   

export default Header;