// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import useAxiosSecure from "../../Axios/useAxiosSecure";
// import Navbar from "../Home/Components/Navbar";
// import { Link } from "react-router-dom";

const Booking = () => {
    // const [allCards, setAllCards] = useState([])
    // const [filteredCard, setFilteredCard] = useState([])
    // const getId = useParams();
    // const { id } = getId;
    // console.log(id)

    // const axiosSecure = useAxiosSecure()
    // const url = '/services';

    // useEffect(()=>{

    //     axiosSecure.get(url)
    //     .then(res => setAllCards(res.data))
    
    // },[url,axiosSecure])

    // console.log(allCards)

    // useEffect(() => {
    //     const matchedCard = allCards?.find((card) => card._id == id);
    //     setFilteredCard(matchedCard);
    //   }, [id, allCards]);

    return (
        <div>
            {/* <Navbar></Navbar>
            <div className="flex items-center justify-center">
                <div className="flex gap-2">

                        <img className=" h-[270px]" src={filteredCard?.service_image} alt="" />

                        <div className=" p-3 bg-[#D7CBA3] max-w-[530px]">
                            <div className="mb-1">
                            <center className=" font-zolina mb-1 font-semibold">{filteredCard?.service_name}</center>
                            <p className="line-clamp-2 px-2 italic text-[15px]">{filteredCard?.service_description}</p>
                        </div>

                        <div className="px-2 gap-3 flex items-center ">
                            <div className=" flex items-start gap-2">
                                <img className="mt-1 h-8 w-8 rounded-full" src={filteredCard?.service_provider_image} alt="" />
                                <h1 className="line-clamp-2 text-sm">{filteredCard?.service_provider_name}</h1>
                            </div>
                            <div className=" w-[100px] gap-1 flex items-center">
                            
                                <button className=" text-[14px] text-white text-sm flex py-1 px-2 items-center justify-center rounded-md  border-[0.1px] border-white">{filteredCard?.service_price}</button>
                                <Link to={`/Details/${filteredCard?._id}`}>
                                <button className=" text-[14px] w-8 text-white text-sm flex py-[6px] px-1 items-center justify-center rounded-md  border-[0.1px] border-white"><img className="h-4" src="https://i.ibb.co/8MYwD5Q/right.png" alt="" /></button>
                                </Link>
                            </div>
                        </div>

                        </div>

                </div>
            </div> */}
        </div>
    );
};

export default Booking;