import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";



export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    // console.log(children);
    const [user, setUser] = useState(null);

    // creating the first user
    const createUser  = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }


    // login the users
    const signInUser = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password)
    }

    // ei website e kono user login / registration kora ache kina ta check kora hoy onAuthStateChange diye
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                console.log('current value of the current user', currentUser);
                setUser(currentUser)
            }
        })
        return () =>{
            unSubscribe();
        }
    }, [])


    // sign out users
    const logOut = () =>{
      return  signOut(auth)
    }

   const authInfo  = {
    user,
    createUser,
    signInUser,
    logOut
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