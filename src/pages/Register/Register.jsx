import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Home/Components/Navbar';
import { useContext } from 'react';
import { Context } from '../../Context/AllContext';
import {Helmet} from "react-helmet";

const Register = () => {

  const { handleRegister, registerError, termsError, handleGoogleSignIn} = useContext(Context)

  const navigate = useNavigate()
  
  return (
    <div className="bg-[url(https://i.ibb.co/gddjk3j/bg-vv.jpg)] bg-cover p-1">
      <Navbar></Navbar>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Artvend | My Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="flex flex-col items-center h-screen">
      <div className="bg-[#ECD6BD] glass shadow-md mt-12 rounded px-8 pt-6 pb-8 mb-4">
        <center className=" my-3 text-[#a55e3f] font-garamond text-2xl uppercase">Register</center>
      <form onSubmit={(e)=>handleRegister(e, navigate)} >
      <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F7F0E8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" id="name" name="name" placeholder="Enter your name" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F7F0E8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="email" id="email" name="email" placeholder="Enter your email" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F7F0E8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="password" id="password" name="password" placeholder="Enter your password" />
             <p className=' text-red-600 '>{registerError}</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
              Photo URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F7F0E8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" id="url" name="url" placeholder="Enter your photo url" />
          </div>

          <div >
            <div className="flex gap-2">
            <input type="checkbox" id='checkbox' name='checkbox'/> <p className=' text-white '>Accept Term & Conditions</p>
            </div>
            <p className=' text-red-600 '>{termsError}</p>
          </div>
          

          <div className="flex mt-3 items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>

        <center>
            <button 
            onClick={handleGoogleSignIn}
            className="text-white text-sm flex my-2 py-2 px-3 items-center justify-center rounded-md border-[0.1px] border-white">
              <img className="w-4 rounded-full avatar" src="https://i.ibb.co/wMJtbrm/google-icon.png" alt="" />
            </button>
          </center>

          <center className=' my-3'>
            <p className="text-black">
              Already have an account?{' '}
              <Link className="text-red-600" to="/Login">
                Login
              </Link>{' '}
            </p>
          </center>
      </div>

      </div>
    </div>
  );
};

export default Register;