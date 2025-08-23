// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithRedirect, signInWithPopup,GoogleAuthProvider} from "firebase/auth"; 
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYpR7lH2LWb-ip2Pd1-0tygEH9aI_b2gU",
  authDomain: "crwn-clothing-db-f4a2a.firebaseapp.com",
  projectId: "crwn-clothing-db-f4a2a",
  storageBucket: "crwn-clothing-db-f4a2a.firebasestorage.app",
  messagingSenderId: "895832837895",
  appId: "1:895832837895:web:a2de2c5efe161273c13fa2",
  measurementId: "G-GNZ8X2WKNR"
};

// Initialize Firebase
const firebaseApp= initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }

    catch (error){
      console.log('errror creating the user', error.message)
    }
  }

  return userDocRef;
  
}