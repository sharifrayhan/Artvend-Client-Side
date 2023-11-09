import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Overview = () => {
    return (
        <div className=" py-12">
            <div className="container mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 lg:w-1/2 px-6">
                <motion.div whileHover={{ scale: 1.1 }}><h1 className="text-4xl mb-6 text-[#a55e3f] font-garamond  font-bold">Discover Your Ideal Artisan at Artvend: Where Creativity Meets Skill</h1></motion.div>
                    <p className="text-lg mb-6">Find the Perfect Artist for Your Vision - Collaborate with Talented Individuals for T-Shirt Paintings, Wall Art, Embroidery Art, Bottle Art, Patches, and More!</p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h1 className="text-lg md:text-2xl lg:text-3xl">
                                <CountUp end={2500000} duration={3} separator="," />+
                            </h1>
                            <p>Creative Minds</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h1 className="text-lg md:text-2xl lg:text-3xl">
                                <CountUp end={80000} duration={3} separator="," />
                            </h1>
                            <p>Positive Reviews</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h1 className="text-lg md:text-2xl lg:text-3xl">
                                <CountUp end={1000000} duration={3} separator="," />
                            </h1>
                            <p>Order Received</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h1 className="text-lg md:text-2xl lg:text-3xl">
                                <CountUp end={1300000} duration={3} separator="," />
                            </h1>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <img className="w-full  drop-shadow-lg" src="https://i.ibb.co/mXvqxMK/Artboard-1.png"  />
                </div>
            </div>
        </div>
    );
};

export default Overview;
