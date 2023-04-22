import { GET_DEPTOS } from "../Actions/actions.jsx";

const initialState = {
    deptos:[]
}

const rootReducer = (state = initialState , action)=>{
    console.log(action.type);
    switch (action.type) {
        case GET_DEPTOS:
            return{
                ...state,
                deptos: action.payload
            }
        default:
            return {...state};
    }
}

export default rootReducer;