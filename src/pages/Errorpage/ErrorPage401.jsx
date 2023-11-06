import { Link } from "react-router-dom";

const ErrorPage401 = () => {
    return (
      <div className=" h-screen flex flex-col items-center gap-3">
        <img 
          className=" h-[500px] "
          src="https://i.ibb.co/Bz0nTX0/401-unauthorized.png"
          alt=""
        />
 <Link to="/">
 <button
       className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       type="button"
     >
       Back To Homepage
     </button>
 </Link>
      </div>
    );
  };
  
  export default ErrorPage401;