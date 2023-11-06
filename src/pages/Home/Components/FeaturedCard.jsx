import { Link } from "react-router-dom";


const FeaturedCard = ({collection}) => {
    return (
        <div className=" flex flex-col items-center">
            <img className="z-0 h-[300px] rounded-2xl" src={collection?.service_image} alt="" />
           <div className=" p-3 bg-[#D7CBA3] w-[270px] rounded-2xl -mt-16 z-10 sticky">
                <div className="mb-1">
                    <center className=" font-zolina mb-1 font-semibold">{collection?.service_name}</center>
                    <p className="line-clamp-2 px-2 italic text-[15px]">{collection?.service_description}</p>
                </div>
                <div className="px-5 flex items-center gap-3">
                        <div className=" flex items-start gap-2">
                            <img className="mt-1 h-8 w-8 rounded-full" src={collection?.service_provider_image} alt="" />
                            <h1 className="line-clamp-2 text-sm">{collection?.service_provider_name}</h1>
                        </div>
                        <Link><button className=" text-[14px] text-white text-sm flex py-1 px-3 items-center justify-center rounded-md  border-[0.1px] border-white">Details</button></Link>
                </div>
           </div>
        </div>
    );
};

export default FeaturedCard;