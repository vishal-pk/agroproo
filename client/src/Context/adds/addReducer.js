/*eslint-disable*/
import {
    GET_ADD,
    ADD_ERROR,
    POST_ADD,
    DELETE_ADD,
    UPDATE_ADD,
    SET_CURRENT,
    CLEAR_CURRENT
} from "../types";

export default(state,action) =>{

    switch(action.type){

        case GET_ADD:
            return{
                ...state,
                adds: action.payload,
                loading: false
            }

        case ADD_ERROR:
            return{
                ...state,
                error: action.payload
            }

        case POST_ADD:
            return{
                ...state,
                adds:[action.payload,...state.adds],
                loading:false
            }
        case UPDATE_ADD:
            return {
                    ...state,
                    adds: state.adds.map(add =>
                    add._id === action.payload._id ? action.payload : add
                    ),
                    loading: false
            };

        case DELETE_ADD:
            return{
                ...state,
                adds:state.adds.filter(add=>add.id!==action.payload),
                loading:false
            }
        case SET_CURRENT:
             return {
                 ...state,
                current: action.payload
            };
    
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        
    }


}