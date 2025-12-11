import {createContext, useState,useEffect} from 'react';
import {onAuthStateChangedListener,createUserDocumentFromAuth, auth, signOutUser} from '../utils/firebase/firebase.utils'

//First we need to create the context as the actual value I want to save and access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,

});


//Then I create the functional component for the context
//The functional component receive the value from the context 
export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
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