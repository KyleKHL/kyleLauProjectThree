// App.js
import './App.css';
import Header from './components/Header.js';
import UserSearch from './components/UserSearch.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';



function App() {
  return (
    <div className="App">
      <Header />
      <UserSearch />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
