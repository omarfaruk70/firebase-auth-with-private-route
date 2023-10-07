import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Privateroutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    // console.log(user, loading);

    if(loading){
       return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children; // here children is orders components
    }
    return <Navigate to={'/login'}></Navigate>;
};


Privateroutes.propTypes = {
    children: PropTypes.node
}
export default Privateroutes;