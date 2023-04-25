import React ,{useEffect} from "react";
import Cards from '../Cards/cards.jsx';
import{useDispatch} from "react-redux"
import { getDeptos , getUsers } from "../../Redux/Actions/actions.jsx";

const Home = (props)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDeptos())
        dispatch(getUsers())
    })
    return(
        <>
            {/* <Cards/> */}
        </>

)
}

export default Home;