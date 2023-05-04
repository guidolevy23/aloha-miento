import axios from "axios"

export const GET_DEPTOS = "GET_DEPTOS";
export const GET_USERS = "GET_USERS";
export const GET_ONE_DEPTO = "GET_ONE_DEPTO";
export const CLEAN_ONE_DEPTO ="CLEAN_ONE_DEPTO"

export const getDeptos = () =>dispatch=>{
    return axios.get("http://localhost:3001/depto")
    .then(response => dispatch({type:GET_DEPTOS , payload:response.data}))
} 

export const getUsers = () =>dispatch=>{
    return axios.get("http://localhost:3001/user")
    .then(response => dispatch({type:GET_USERS , payload:response.data}))
} 

export const getOneDepto = (id) =>dispatch=>{
    return axios.get(`http://localhost:3001/depto/${id}`)
    .then(response => dispatch({type:GET_ONE_DEPTO , payload:response.data}))
} 

export const cleanOneDepto = () => dispatch =>{
    return dispatch({type:CLEAN_ONE_DEPTO})
}