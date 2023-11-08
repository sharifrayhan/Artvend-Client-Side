

import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
// import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";
import Partnerships from "./Components/Partnerships";
import TopSellers from "./Components/TopSellers";
import {Helmet} from "react-helmet";


const Home = () => {
    return (
        <div className=" max-w-8xl">
                        <Helmet>
                <meta charSet="utf-8" />
                <title>Artvend | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <Overview></Overview>
            <TopSellers></TopSellers>
            <Partnerships></Partnerships>
            {/* <Gallery></Gallery> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;