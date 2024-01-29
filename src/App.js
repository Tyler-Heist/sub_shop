import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/footer';
import Home from './views/home';
import Catering from './views/catering';
import Menu from './views/menu';
import Contacts from './views/contacts';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' />
          <Route path='/catering' element={<Catering />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contacts />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;


/*
REACT BOILERPLATE CODE
import logo from './logo.svg';

          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
*/