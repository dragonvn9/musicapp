import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Home";
import Discover from "../Discover";
import Albums from "../Albums";
import Artists from "../Artists";
import Register from "../Register";
import Login from "../Login";
import AdminDashboard from "../AdminDashboard"
import ArtistDashboard from "../ArtistDashboard";
import ListenerDashboard from "../ListenerDashboard";



const router = createBrowserRouter([
    {
      path: "/",
        element: <Home/>,
      
      errorElement: <h2>Error Page</h2>,
      //loader: rootLoader,
      children: [

        {
            path: "discover",
            element: <Discover/>,
         
        },
        {
            path: "albums",
            element: <Albums/>,
       
        },
        {
          path: "artists",
          element: <Artists/>,
     
        },

      ],
    },
    {path: "/register", element: <Register/> },
    {path: "/login", element: <Login/>},
    {path: "/admin-dashboard", element: <AdminDashboard/>},
    {path: "/artist-dashboard", element: <ArtistDashboard/>},
    {path: "/listener-dashboard", element: <ListenerDashboard/>},
  ]);

  export default router
