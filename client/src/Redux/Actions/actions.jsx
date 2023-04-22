import axios from "axios"

export const GET_DEPTOS = "GET_DEPTOS";

export const getDeptos = () =>dispatch=>{
    console.log("entre a actions");
    return axios.get("http://localhost:3001/depto")
    .then(response => dispatch({type:GET_DEPTOS , payload:response.data}))
} 