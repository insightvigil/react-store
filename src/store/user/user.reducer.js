import { USER_ACTION_TYPES } from "./user.types";

//Here we set the initial reducer state
const INITIAL_STATE = {
    currentUser: null
}


//Reducer Itself in case of redux we need to set the initial state in contrast when we use context and we need to return the state instead of an error
export const userReducer = (state = INITIAL_STATE, action) => {

    //Action type y payload data that we use
    const {type, payload} = action; 

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER :
            return {
                ...state,
                currentUser:payload
            }
        
        default:
            return state;
    }  
}


