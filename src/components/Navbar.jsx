import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/Authprovider";
// import auth from "../firebase.config";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then( () => {
      console.log('user logged out successfully');
    })
    .catch((error) => {
      console.log(error);
    })
  }
    const navlink = <>
    <li>
       <Link to={'/'}>Home</Link>
    </li>
    <li>
       <Link to={'/login'}>Login</Link>
    </li>
    <li>
       <Link to={'/register'}>Register</Link>
    </li>
    <li>
       <Link to={'/orders'}>Orders</Link>
    </li>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
          {navlink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Auth moha milon</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
       {navlink}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ?
           <>
          <span>{user.email}</span>
          <a onClick={handleLogOut} className="btn btn-sm">Sign Out</a>
           </> :
           <Link to={'/login'}>
            <button className="btn btn-md">Log in</button>
           </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
