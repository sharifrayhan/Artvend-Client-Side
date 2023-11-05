import { Link } from 'react-router-dom';
import Navbar from '../Home/Components/Navbar';

const Register = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/gddjk3j/bg-vv.jpg)] bg-cover p-1">
      <Navbar></Navbar>
      <div className="flex flex-col items-center h-screen">
        <form className="bg-[#ECD6BD] glass shadow-md mt-12 rounded px-8 pt-6 pb-8 mb-4 w-64">
          <center>
            <h1 className=" text-xl mb-2">REGISTER</h1>
          </center>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F7F0E8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F7F0E8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F7F0E8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F7F0E8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photoURL"
              type="text"
              placeholder="Photo URL"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>

          <center>
            <button className="text-white text-sm flex my-2 py-2 px-3 items-center justify-center rounded-md border-[0.1px] border-white">
              <img className="w-4 rounded-full avatar" src="https://i.ibb.co/wMJtbrm/google-icon.png" alt="" />
            </button>
          </center>

          <center>
            <p className="text-black">
              Already have an account?{' '}
              <Link className="text-red-600" to="/Login">
                Login
              </Link>{' '}
            </p>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Register;
