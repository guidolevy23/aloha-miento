import React,{useEffect} from "react";
import Card from "../Card/card.jsx";
import {useDispatch, useSelector } from "react-redux";
import {getOneUser,getUsers} from '../../Redux/Actions/actions.jsx'

function Cart (props){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[props])
    const users = useSelector(state=>state.users);
    useEffect(()=>{
        dispatch(getOneUser(users[0].id_user))
    },[props])
    const user = useSelector(state=>state.user);

    return(
        <div>
        <h2>CART</h2>
        <div className="caja">
        
        {user.Deptos?.map(depto=>{
            return(
               
                    <Card
                    id={depto.id_depto}
                    meters={depto.meters} 
                    ubication={depto.ubication}
                    price={depto.price}
                    available={depto.available}
                    images={depto.images}
                    />
                
                )})}
        
    </div>
    </div>
    )
}

export default Cart;