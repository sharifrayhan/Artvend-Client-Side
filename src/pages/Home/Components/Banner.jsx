import { Cursor , useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';

const Banner = () => {

    const [text] = useTypewriter({
        words: ["Where Crafters, Photographers, and Artists Meet the World!"],
        loop: {}
    })

    return (
        <div className="h-[300px] md:h-[800px] lg:h-[800px] bg-[url(https://i.ibb.co/FshBWvL/new-banner.jpg)] -mt-[10px] md:-mt-[270px] lg:-mt-24 bg-contain bg-center lg:bg-cover bg-no-repeat">
            <div className="flex flex-col items-center justify-center ">
            <motion.div whileHover={{ scale: 1.1 }}>
                <h1 className=" font-zolina text-2xl md:text-5xl lg:text-8xl mt-[90px] md:mt-[300px] lg:mt-[220px] "     data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900">ARTVEND</h1>
                 </motion.div>
                <span className='text-[9px] uppercase text-[#EF5C2B] md:text-sm lg:text-lg'>{text}<Cursor></Cursor></span>
                
            </div>
        </div>
    );
};

export default Banner;