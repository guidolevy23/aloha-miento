import React from "react";
import SearchBar from "../SearchBar/searchbar";
import {Link , NavLink} from 'react-router-dom'


function NavBar(props){
    return(
        <>
            <h2>ALOHA-MIENTOS</h2>
            <p>DECILE HOLA AL HOGAR DE TUS SUEÑOS</p>
            <NavLink to="/about">ABOUT</NavLink>
            <br />
            <NavLink to="/">HOME</NavLink>
            <br />
            <NavLink to="/contact">CONTACT</NavLink>
            <br />
            <NavLink to="/deptos">APARTMENTS</NavLink>
            <br />
            <SearchBar/>
        </>
    )
}

export default NavBar;