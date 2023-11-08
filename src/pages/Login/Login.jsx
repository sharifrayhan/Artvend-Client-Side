import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Home/Components/Navbar";
import { useContext } from "react";
import { Context } from "../../Context/AllContext";
import {Helmet} from "react-helmet";

const Login = () => {

  const  {handleGoogleSignIn, handleLogin} = useContext(Context)
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="bg-[url(https://i.ibb.co/gddjk3j/bg-vv.jpg)] bg-cover p-1">
        <Navbar></Navbar>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Artvend | My Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="flex flex-col items-center h-screen ">
    <div className="bg-[#ECD6BD] glass shadow-md mt-12 rounded px-8 pt-6 pb-8 mb-4 w-64">
     <form  onSubmit={(e) => handleLogin(e, location, navigate)} >
       
       <center>
           <h1 className=" my-3 text-[#a55e3f] font-garamond text-2xl uppercase">LOGIN</h1>
       </center>
       
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
           Email
         </label>
         <input
           className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F7F0E8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="email"
           name="email"
           type="text"
           placeholder="Email"
         />
       </div>
       <div className="mb-6">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
           Password
         </label>
         <input
           className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F7F0E8]  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="password"
           name="password"
           type="password"
           placeholder="Password"
         />
       </div>
       <div className="flex items-center justify-center">
         <button
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           type="submit"
         >
           Sign In
         </button>
       </div>
     </form>

     <center>
            <button
            onClick={()=>handleGoogleSignIn( location, navigate)}
            className=" text-white text-sm flex my-2 py-2 px-3 items-center justify-center rounded-md  border-[0.1px] border-white"
            >
            <img
                className="w-4 rounded-full avatar"
                src="https://i.ibb.co/wMJtbrm/google-icon.png"
                alt=""
            />
            </button>
        </center>

        <center>
         <p className=" text-black ">
           Dont have an account?{" "}
           <Link className=" text-red-600" to="/Register">
             Register
           </Link>{" "}
         </p>
       </center>

       </div>
   </div>
    </div>
  );
};

export default Login;
