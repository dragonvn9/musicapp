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
import ArtistUsers from "../dashboard/ArtistUsers";
import ListenerUsers from "../dashboard/ListenerUsers";
import Songs from "../dashboard/Songs";
import Playsists from "../dashboard/Playsists";
import Comments from "../dashboard/Comments";
import Announcements from "../dashboard/Announcements";
import AddNewArtist from "../dashboard/AddNewArtist";
import EditArtist from "../dashboard/EditArtist";
import AddNewListener from "../dashboard/AddNewListener";
import EditListener from "../dashboard/EditListener";
import AddNewSong from "../dashboard/AddNewSong";
import EditSong from "../dashboard/EditSong";




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
    {path: "/admin-dashboard", element: <AdminDashboard/>,
      children: [
        {
          path: "artist-users",
          element: <ArtistUsers/>,
        },
        {
          path: "listener-users",
          element: <ListenerUsers/>,
        },
        {
          path: "song-list",
          element: <Songs/>,
        },
        {
          path: "playsists",
          element: <Playsists/>,
        },
        {
          path: "albums",
          element: <Albums/>,
        },
        {
          path: "comments",
          element: <Comments/>,
        },
        {
          path: "announcements",
          element: <Announcements/>,
        },

      ]
    },
    {path: "/artist-dashboard", element: <ArtistDashboard/>,
      children: [
        {
          path: "listener-users",
          element: <ListenerUsers/>,
        },
        {
          path: "song-list",
          element: <Songs/>,
        },
        {
          path: "albums",
          element: <Albums/>,
        },
        {
          path: "comments",
          element: <Comments/>,
        },
        {
          path: "announcements",
          element: <Announcements/>,
        },

      ]
    },
    {path: "/listener-dashboard", element: <ListenerDashboard/>,
      children: [
        {
          path: "song-list",
          element: <Songs/>,
        },
        {
          path: "albums",
          element: <Albums/>,
        },
        {
          path: "comments",
          element: <Comments/>,
        },
        {
          path: "announcements",
          element: <Announcements/>,
        },

      ]
    },

    
    
    {path: "/add-new-artist", element: <AddNewArtist/>},
    {path: "/edit-artist/:id", element: <EditArtist/>},
    {path: "/add-new-listener", element: <AddNewListener/>},
    {path: "/edit-listener/:id", element: <EditListener/>},
    {path: "/add-new-song", element: <AddNewSong/>},
    {path: "/edit-song/:id", element: <EditSong/>},
    
    

  ]);

  export default router

 
