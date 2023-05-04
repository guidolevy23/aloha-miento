import React from "react";
import SearchBar from "../SearchBar/searchbar";
import { NavLink} from 'react-router-dom'
import './NavBar.css'

function NavBar(props){
    return(
        <div className="navbar">
            <h2>ALOHA-MIENTOS</h2>
            <p>DECILE HOLA AL HOGAR DE TUS SUEÑOS</p>
            <div className="botones">
                <NavLink to="/">HOME</NavLink>
                <br />
                <NavLink to="/contact">CONTACT</NavLink>
                <br />
                <NavLink to="/deptos">APARTMENTS</NavLink>
                <br />
                <SearchBar/>
            </div>
        </div>
    )
}

export default NavBar;