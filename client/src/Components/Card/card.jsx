import React from "react";
import './card.css'
import {Link} from 'react-router-dom'
import{useDispatch} from "react-redux"
import {getOneDepto} from '../../Redux/Actions/actions.jsx'

function Card (props){
    const dispatch = useDispatch()
    function handleClick(){
        dispatch(getOneDepto(props.id))
    }
    return(
        <div className="borde">
            <img alt="Error" src={props.images[0]}/>
            <p>Ubicacion: {props.ubication}</p>
            <p>Precio: {props.price}</p>
            <p>Disponibilidad: { props.available? "Disponible":"No disponible"}</p>
            <p>Metros cuadrados: {props.meters}</p>
            <Link to={`/description/${props.id}`}><button onClick={handleClick}>MAS INFO</button></Link>
        </div>
    )
}

export default Card;