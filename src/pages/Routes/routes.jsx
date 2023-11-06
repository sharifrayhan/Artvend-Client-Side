import {
    createBrowserRouter,
  } from "react-router-dom";
import Errorpage from "../Errorpage/Errorpage";
import Rootpage from "../Rootpage/Rootpage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Services from "../Services/Services";
import ErrorPage401 from "../Errorpage/ErrorPage401";
import ErrorPage403 from "../Errorpage/ErrorPage403";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage></Rootpage>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/401",
          element: <ErrorPage401></ErrorPage401>,
        },
        {
          path: "/403",
          element: <ErrorPage403></ErrorPage403>,
        },
        {
          path: "/Login",
          element: <Login></Login>,
        },
        {
          path: "/Register",
          element: <Register></Register>,
        },
        {
          path: "/Services",
          element: <Services></Services>,
        },
      ],
    }, 
  ]);

  export default router;
  