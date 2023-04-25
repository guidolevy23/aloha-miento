import './App.css';
import React from 'react';
import Home from './Components/Home/home';
import NavBar from './Components/NavBar/NavBar.jsx';
import {Route} from 'react-router-dom'
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Cards from './Components/Cards/cards';



function App() {
  return (
    <div className="App">

      <NavBar/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/deptos'>
        <Cards/>
      </Route>
      <Route exact path='/contact'>
        <Contact/>
      </Route>
    </div>
  );
}

export default App;
