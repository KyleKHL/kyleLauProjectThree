// App.js
import './App.scss';

// import Routing to page
import { Link, Route, Routes, Outlet } from 'react-router-dom';

// import content to page
import Header from './components/Header.js';
import UserSearch from './components/UserSearch.js';
import Footer from './components/Footer.js';
import RecipeGallery from './components/RecipeGallery';
import Favorites from './components/Favorites';




function App() {
  return (
    <div className="App">
      <Header />
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
      <UserSearch />
      <Footer />

      <Routes>
        {/* <Route path='/' element={ <RecipeGallery />}/> */}
        {/* <Route path='/favorites' element={ <Favorites />} /> */}
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
