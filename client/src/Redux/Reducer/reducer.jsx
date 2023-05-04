import { GET_DEPTOS, GET_ONE_DEPTO, GET_USERS , CLEAN_ONE_DEPTO , UPDATE_USER , GET_ONE_USERS} from "../Actions/actions.jsx";

const initialState = {
    deptos:[],
    users:[],
    oneDepto: {},
    user : {}
}

const rootReducer = (state = initialState , action)=>{
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
        case UPDATE_USER:
            return{
                ...state
            }
        case GET_ONE_USERS:
            return{
                ...state,
                user : action.payload
            }
        default:
            return {...state};
    }
}

export default rootReducer;