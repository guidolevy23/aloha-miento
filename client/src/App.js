import './App.css';
import React from 'react';
import Home from './Components/Home/home';
import Description from './Components/Description/description.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import {Route} from 'react-router-dom'
import Contact from './Components/Contact/contact';
import Cards from './Components/Cards/cards';
import Cart from './Components/Cart/cart.jsx';



function App() {
  return (
    <div className="App">

      <NavBar/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path='/deptos'>
        <Cards/>
      </Route>
      <Route exact path='/contact'>
        <Contact/>
      </Route>
      <Route exact path='/cart'>
        <Cart/>
      </Route>
      <Route path='/description/:id'>
        <Description/>
      </Route>
    </div>
  );
}

export default App;
