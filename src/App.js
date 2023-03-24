// App.js
import './App.css';
// import content to page
import Header from './components/Header.js';
import UserSearch from './components/UserSearch.js';
import Footer from './components/Footer.js';
// import Routing to page
import { Link, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <UserSearch />
      <Footer />
    </div>
  );
}

export default App;
