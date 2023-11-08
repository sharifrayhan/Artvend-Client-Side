

import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
// import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";
import Partnerships from "./Components/Partnerships";
import TopSellers from "./Components/TopSellers";


const Home = () => {
    return (
        <div className=" max-w-8xl">
     
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