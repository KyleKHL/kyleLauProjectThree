// Nav.js
// import Elements
import Favorites from './Favorites.js';
import Bookmark from './Bookmark.js';

// import Routing to page
import { Link, Route, Routes, Outlet } from 'react-router-dom';


const Nav = () => {
    return(
        <>
            <nav className="menu">
                <ul className="menuList">
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/bookmark">Bookmark</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                {/* <Route path='*' element={ <App /> } /> */}
                {/* <Route path='/favorites' element={ <Favorites /> } /> */}

                {/* <Route path='*' element={<ErrorPage />} /> */}
            </Routes>
        </>
    )
}

export default Nav;