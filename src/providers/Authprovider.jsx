import { createContext, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";



export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    // console.log(children);
    const [user, setUser] = useState(null);
    const createUser  = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password)
    }
   const authInfo  = {user, createUser , signInUser}

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