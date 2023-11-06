import { Link } from "react-router-dom";


const FeaturedCard = ({collection}) => {
    return (
        <div className=" flex flex-col items-center">
            <img className="z-0 h-[300px] rounded-2xl" src={collection?.service_image} alt="" />
           <div className=" p-3 bg-[#D7CBA3] flex flex-col justify-between w-[270px] min-h-[180px] rounded-2xl -mt-16 z-10 sticky">
                <div className="mb-1">
                    <center className=" font-zolina mb-1 font-semibold">{collection?.service_name}</center>
                    <p className="line-clamp-2 px-2 italic text-[15px]">{collection?.service_description}</p>
                </div>
                <div className="px-2 gap-3 flex items-center ">
                        <div className=" flex items-start gap-2">
                            <img className="mt-1 h-8 w-8 rounded-full" src={collection?.service_provider_image} alt="" />
                            <h1 className="line-clamp-2 text-sm">{collection?.service_provider_name}</h1>
                        </div>
                        <div className=" w-[100px] gap-1 flex items-center">
                           
                            <button className=" text-[14px] text-white text-sm flex py-1 px-2 items-center justify-center rounded-md  border-[0.1px] border-white">{collection?.service_price}</button>
                            <Link to={`/Details/${collection?._id}`}>
                            <button className=" text-[14px] w-8 text-white text-sm flex py-[6px] px-1 items-center justify-center rounded-md  border-[0.1px] border-white"><img className="h-4" src="https://i.ibb.co/8MYwD5Q/right.png" alt="" /></button>
                            </Link>
                        </div>
                </div>
           </div>
        </div>
    );
};

export default FeaturedCard;