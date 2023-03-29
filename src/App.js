// App.js
import './App.scss';

// import content to page
import Header from './components/Header.js';
import UserSearch from './components/UserSearch.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      {/* routing is in UserSearch Component */}
      <UserSearch />
      <Footer />

    </div>
  );
}

export default App;
