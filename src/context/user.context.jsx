import {createContext, useState, useEffect, useReducer} from 'react';
import {onAuthStateChangedListener,createUserDocumentFromAuth, auth, signOutUser} from '../utils/firebase/firebase.utils'
import { createAction } from '../utils/reducer/reducer.utils';


//First we need to create the context as the actual value I want to save and access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});

//To avoid human errors writing we storage the strings in some constant type
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}


const userReducer = (state, action) => {

    //Action type y payload data that we use
    const {type, payload} = action; 

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER :
            return {
                ...state,
                currentUser:payload
            }
        
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }  
}

const INITIAL_STATE = {
    currentUser: null
}



//Then I create the functional component for the context
//The functional component receive the value from the context 
export const UserProvider = ({children}) => {

//Context Hook Storage
//    const [currentUser, setCurrentUser] = useState(null)

//Reducer Hook Storage
// First Argument the reducer, Second Argument the Initial STATE this is the state
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const setCurrentUser = (user) => {
        dispatch( 
            createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)
        )
    }
    

    //The value we give to the provider
    const value = {currentUser, setCurrentUser}

    //If the user signOutUser();

    useEffect(()=> {
        const unsubscribe = onAuthStateChangedListener((user)=> {
            if(user) {
                 createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


/*

const userReducer = (state, action) => {

    return {
    currentUser: null;
    }

}


*/