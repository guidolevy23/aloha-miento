import React ,{useEffect} from "react";
import Cards from '../Cards/cards.jsx'
import SearchBar from '../SearchBar/searchbar.jsx';
import{useDispatch} from "react-redux"
import { getDeptos } from "../../Redux/Actions/actions.jsx";

const Home = (props)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("ESTOY ACA");
        dispatch(getDeptos())
        console.log("en teoria ya hice dispatch");
    })
    return(
        <>
            <SearchBar/>
            <Cards/>
        </>

)
}

export default Home;