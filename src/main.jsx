import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Authprovider from "./providers/Authprovider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:   [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} />  { /* here the full app---(routerProvider is just a children for context api) */}
    </Authprovider>
  </React.StrictMode>
);
