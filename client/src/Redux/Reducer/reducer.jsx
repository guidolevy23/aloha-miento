import { GET_DEPTOS, GET_ONE_DEPTO, GET_USERS , CLEAN_ONE_DEPTO } from "../Actions/actions.jsx";

const initialState = {
    deptos:[],
    users:[],
    oneDepto: {}
}

const rootReducer = (state = initialState , action)=>{
    console.log(action.type);
    switch (action.type) {
        case GET_DEPTOS:
            return{
                ...state,
                deptos: action.payload
            }
        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }
        case GET_ONE_DEPTO:
            return{
                ...state,
                oneDepto: action.payload
            }
        case CLEAN_ONE_DEPTO:
            return {
                ...state,
                oneDepto: {}
            }
        default:
            return {...state};
    }
}

export default rootReducer;