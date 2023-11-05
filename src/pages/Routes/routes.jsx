import {
    createBrowserRouter,
  } from "react-router-dom";
import Errorpage from "../Errorpage/Errorpage";
import Rootpage from "../Rootpage/Rootpage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
  
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
          path: "/Login",
          element: <Login></Login>,
        },
        {
          path: "/Register",
          element: <Register></Register>,
        },
      ],
    }, 
  ]);

  export default router;
  