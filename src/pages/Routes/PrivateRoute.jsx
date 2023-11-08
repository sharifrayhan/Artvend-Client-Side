import { Navigate, useLocation } from 'react-router-dom';

import {  useContext } from 'react';
import { Context } from '../../Context/AllContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Context)
    const location = useLocation()


    if (loading){

        return <center><img className=' h-screen w-screen' src="https://i.ibb.co/1fKG6Yb/loading.gif" alt="" /></center>
    
    }

    if(user){

        return children

    }

    else{

        return <Navigate state={location.pathname} to={"/Login"}></Navigate>
    }

 
};



export default PrivateRoute;