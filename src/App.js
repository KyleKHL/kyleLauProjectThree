// App.js
import './App.css';
// import content to page
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import UserSearch from './components/UserSearch.js';
import Favorites from './components/Favorites.js';
import Footer from './components/Footer.js';




function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <UserSearch />
      <Footer />
    </div>
  );
}

export default App;
