
import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import Navbar from "./Components/Navbar";


const Home = () => {
    return (
        <div className=" max-w-8xl">
     
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
        </div>
    );
};

export default Home;