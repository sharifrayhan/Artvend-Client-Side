import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const ErrorPage = () => {
    return (
      <div className=" h-screen flex flex-col items-center gap-3">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Error</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <img 
          className=" h-[500px] "
          src="https://i.ibb.co/WkYQMQr/404-page.png"
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
  
  export default ErrorPage;