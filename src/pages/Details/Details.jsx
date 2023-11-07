import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import Navbar from "../Home/Components/Navbar";
import { Link } from "react-router-dom";


const Details = () => {
    const [allCards, setAllCards] = useState([])
    const [filteredCard, setFilteredCard] = useState([])
    const [userCards, setUserCards] = useState([])
    const [otherCards, setOtherCards] = useState([])
    const getId = useParams();
    const { id } = getId;
    console.log(id)

    const axiosSecure = useAxiosSecure()
    const url = '/services';

    useEffect(()=>{

        axiosSecure.get(url)
        .then(res => setAllCards(res.data))
    
    },[url,axiosSecure])

    console.log(allCards)

    useEffect(() => {
        const matchedCard = allCards?.find((card) => card._id == id);
        setFilteredCard(matchedCard);
      }, [id, allCards]);


      console.log(filteredCard)


    // Filter all cards of this user
    useEffect(() => {
        const matchedCard = allCards?.filter((card) => card.service_provider_email == filteredCard?.service_provider_email);
        setUserCards(matchedCard);
      }, [allCards, filteredCard?.service_provider_email ]);

      console.log(userCards)

    // From filtered cards of this user select the cards except the one already shown
      useEffect(() => {
        const matchedCards = userCards?.filter((card) => card._id !== id);
        setOtherCards(matchedCards);
      }, [id, userCards]);

      console.log(otherCards)



    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center justify-center">
                <div className="flex flex-col min-h-screen gap-2">

                        <img className=" h-[300px] md:h-[500px] lg:h-[500px] rounded-tr-[70px] rounded-tl-[5px] rounded-b-[5px]" src={filteredCard?.service_image} alt="" />

                        <div className=" p-3 bg-[#D7CBA3] mb-10 max-h-[800px] max-w-[530px] rounded-b-[5px] rounded-t-[5px]">
                            
                            <div className="px-2 gap-3 flex items-center justify-center ">
                                <div className=" flex flex-col items-center mb-1">
                                    <img className="mt-1 h-[65px] w-[65px] rounded-full" src={filteredCard?.service_provider_image} alt="" />
                                    <p className="text-base ">{filteredCard?.service_provider_name}</p>
                                    <h1 className="text-sm">{filteredCard?.service_location_area}</h1>
                                </div>
                                {/* <div className=" w-[100px] gap-1 flex items-center">
                                    <button className=" text-[14px] text-white text-sm flex py-1 px-2 items-center justify-center rounded-md  border-[0.1px] border-white">{filteredCard?.service_price}</button>
                                    <Link to={`/Details/${filteredCard?._id}`}>
                                    <button className=" text-[14px] w-8 text-white text-sm flex py-[6px] px-1 items-center justify-center rounded-md  border-[0.1px] border-white"><img className="h-4" src="https://i.ibb.co/8MYwD5Q/right.png" alt="" /></button>
                                    </Link>
                                </div> */}
                            </div>
                            
                            
                            <div className="">
                                <center className=" text-[20px] font-garamond mb-1 font-semibold">{filteredCard?.service_name}</center>
                                <p className="text-center px-2 italic text-[15px]">{filteredCard?.service_description}</p>
                            </div>

                            <center>
                                <button className="bg-red-500 my-3  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Book Now
                                </button>
                            </center>

                        </div>

                </div>
            </div>
{/* Other Services By This Provider */}
            <div>
                <center className="my-3 text-[#a55e3f] font-garamond uppercase font-semibold text-xl">Other Services From {filteredCard?.service_provider_name} </center>
            <div className=" flex flex-wrap gap-3 items-center justify-center">
                {
                    otherCards.map((otherCard)=>(

                     

                            <div key={otherCard._id}  className=" flex flex-col items-center">
                            <img className="z-0 h-[300px] rounded-2xl" src={otherCard?.service_image} alt="" />
                            <div className=" p-3 bg-[#D7CBA3] flex flex-col justify-between w-[270px] min-h-[180px] rounded-2xl -mt-16 z-10 sticky">
                                <div className="mb-1">
                                    <center className=" text-[20px] font-garamond mb-1 font-semibold">{otherCard?.service_name}</center>
                                    <p className="line-clamp-2 px-2 text-center italic text-[15px]">{otherCard?.service_description}</p>
                                </div>
                                <div className="px-2 gap-3 flex items-center ">
                                        <div className=" flex items-start gap-2">
                                            <img className="mt-1 h-8 w-8 rounded-full" src={otherCard?.service_provider_image} alt="" />
                                            <h1 className="line-clamp-2 text-sm">{otherCard?.service_provider_name}</h1>
                                        </div>
                                        <div className=" w-[100px] gap-1 flex items-center">
                                        
                                            <button className=" text-[14px] text-white text-sm flex py-1 px-2 items-center justify-center rounded-md  border-[0.1px] border-white">{otherCard?.service_price}</button>
                                            <Link to={`/Details/${otherCard?._id}`}>
                                            <button className=" text-[14px] w-8 text-white text-sm flex py-[6px] px-1 items-center justify-center rounded-md  border-[0.1px] border-white"><img className="h-4" src="https://i.ibb.co/8MYwD5Q/right.png" alt="" /></button>
                                            </Link>
                                        </div>
                                </div>
                             </div>
                            </div> 
                        
                       

                    ))
                }
            </div>               



            </div>

        </div>
    );
};

export default Details;