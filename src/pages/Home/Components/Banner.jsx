import { Cursor , useTypewriter } from 'react-simple-typewriter'

const Banner = () => {

    const [text] = useTypewriter({
        words: ["Where Crafters, Photographers, and Artists Meet the World!"],
        loop: {}
    })

    return (
        <div className=" h-[900px] bg-[url(https://i.ibb.co/FshBWvL/new-banner.jpg)] mt-0 md:-mt-24 lg:-mt-24 bg-contain lg:bg-cover bg-no-repeat">
            <div className="flex flex-col items-center justify-center ">
                <h1 className=" font-zolina text-2xl md:text-5xl lg:text-8xl mt-[80px] md:mt-[155px] lg:mt-[270px] "     data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900">ARTVEND</h1>
                <span className='text-[9px] text-[#EF5C2B] md:text-sm lg:text-lg'>{text}<Cursor></Cursor></span>
                
            </div>
        </div>
    );
};

export default Banner;