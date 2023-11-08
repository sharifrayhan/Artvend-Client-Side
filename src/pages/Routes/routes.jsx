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
import MyServices from "../My Services/MyServices";
import Details from "../Details/Details";
import AboutUs from "../About Us/AboutUs";
import MySchedules from "../My Schedules/MySchedules";
import AddService from "../AddService/AddService";
import UpdateService from "../Update Service/UpdateService";

  
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
        {
          path: "/MyServices",
          element: <MyServices></MyServices>,
        },
        {
          path: "/AddServices",
          element: <AddService></AddService>,
        },
        {
          path: "/MySchedules",
          element: <MySchedules></MySchedules>,
        },
        {
          path: "/Details/:id",
          element: <Details></Details>,
        },
        {
          path: "/AboutUs",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "/UpdateService/:id",
          element: <UpdateService></UpdateService>,
        },
      ],
    }, 
  ]);

  export default router;
  