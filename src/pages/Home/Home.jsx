
import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";


const Home = () => {
    return (
        <div className=" max-w-8xl">
     
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <Overview></Overview>
        </div>
    );
};

export default Home;