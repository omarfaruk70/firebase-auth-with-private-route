import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const Authprovider = ({children}) => {
    // console.log(children);
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    // creating the first user
    const createUser  = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }


    // login the users
    const signInUser = (email, password) => {
        setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
    }

    // ei website e kono user login / registration kora ache kina ta check kora hoy onAuthStateChange diye
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
              console.log('current value of the current user', currentUser);
              setUser(currentUser)
              setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    }, [])

    // signinwith google

     const signinWithGoogle = () =>{
        return signInWithPopup (auth, googleProvider)
     }

    // sign out users
    const logOut = () =>{
        setLoading(true)
        return  signOut(auth)
    }

   const authInfo  = {
    user,
    createUser,
    signInUser,
    logOut,
    loading,
    signinWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


Authprovider.propTypes = {
    children: PropTypes.node,
}
export default Authprovider;

/***
 * 1. create context
 * 2. context provider with value
 * 3. use the context provider named Authprovider in the main.jsx file and wrape the routerprovider.
 * 4. access children in context provider as a children and use it in the middle of the provider
 * 
 */