import React from "react";
import './card.css'

function Card (props){
    return(
        <div className="borde">
            <img alt="" src={props.images[0]}/>
            <p>Ubicacion: {props.ubication}</p>
            <p>Precio: {props.price}</p>
            {/* <p>Disponibilidad: { props.available? "Disponible":"No disponible"}</p> */}
            <p>Metros cuadrados: {props.meters}</p>
        </div>
    )
}

export default Card;