import React , {useEffect} from "react";
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {getOneDepto, updateUser, getUsers} from '../../Redux/Actions/actions.jsx'

const Description = (props) =>{
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getOneDepto(id))
        dispatch(getUsers())
    },[props])
    const oneDepto = useSelector((state)=>state.oneDepto);
    const handleClick = () =>{
        dispatch(updateUser(1,oneDepto.id_depto))//A EDITAR ESE 1 QUE ESTA HARDCODEADO
    }
    return(
        <div className="descripcion">
            {/* <p>HOLA SOY {oneDepto.ubication}</p> */}
            {oneDepto.images?.map((d)=><a href={d}><img alt="Error" src={d}/></a>)}
            <p>{oneDepto.ubication}</p>
            <p>Precio: {oneDepto.price}</p>
            <p>Disponibilidad: { oneDepto.available? "Disponible":"No disponible"}</p>
            <p>Metros cuadrados: {oneDepto.meters}</p>
            <p>Descripcion: {oneDepto.description}</p>
            <button onClick={()=>handleClick()}>ADD</button>
        </div>
    )
}

export default Description;