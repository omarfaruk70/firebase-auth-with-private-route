import { createContext } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    // console.log(children);
    const userInfo = {name: 'Omar Faruk', isStudent: true}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};


Authprovider.propTypes = {
    children: PropTypes.node,
}
export default Authprovider;