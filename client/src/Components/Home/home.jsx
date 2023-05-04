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
        <div className="textoInfo">
            {/* <Cards/> */}
            <p>Nuestra empresa es una plataforma en línea que ofrece un servicio integral de alquiler y compra de departamentos. A través de nuestro sitio web, los usuarios pueden encontrar y alquilar o comprar departamentos en las principales ciudades del país.
            </p>
            <br/>
            <p>Nos enorgullece ofrecer un servicio eficiente y confiable a nuestros clientes. Contamos con un amplio catálogo de departamentos, desde opciones económicas hasta lujosos penthouses, para que cada usuario pueda encontrar el alojamiento perfecto que se adapte a sus necesidades y presupuesto.
            </p>
            <br/>
            <p>En nuestra plataforma, los usuarios pueden buscar departamentos por ubicación, tamaño, número de habitaciones y otros criterios. Además, proporcionamos fotos y descripciones detalladas de cada departamento, para que los usuarios puedan tomar una decisión informada antes de reservar o comprar.</p>
            <br/>
            <p>Para asegurar una experiencia de alquiler o compra sin problemas, nuestro equipo se encarga de verificar cada propiedad antes de su publicación en nuestra plataforma. También ofrecemos asistencia personalizada a cada usuario, para ayudarles en todo momento durante el proceso de alquiler o compra.</p>
            <br/>
            <p>Nuestro objetivo es hacer que el proceso de alquiler y compra de departamentos sea fácil, seguro y accesible para todos. Si estás buscando un lugar para alojarte o invertir en bienes raíces, ¡estamos aquí para ayudarte! No dudes en contactarnos si tienes alguna pregunta o necesitas asistencia en cualquier momento.</p>
        </div>

)
}

export default Home;