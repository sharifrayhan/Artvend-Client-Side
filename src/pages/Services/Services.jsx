import { useEffect, useState } from "react";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import ServiceCards from "./ServiceCards";
import Navbar from "../Home/Components/Navbar";

const Services = () => {

    const [collections, setCollections] = useState([])
    const [allCards, setAllCards] = useState([])
    const [cardsToShow, setCardsToShow] = useState(8);

    const [searchCategory, setSearchCategory] = useState('');

    useEffect(() => {
        const filteredCards = allCards.filter(card =>
            card.service_name.toLowerCase().includes(searchCategory.toLowerCase())
        );
        setCollections(filteredCards);
    }, [allCards, searchCategory]);

    const handleShowAll = () => {
        setCardsToShow(collections.length);
      };

    const axiosSecure = useAxiosSecure()
    const url = '/services';

    useEffect(()=>{

        axiosSecure.get(url)
        .then(res => setAllCards(res.data))
    
    },[url,axiosSecure])

    console.log(collections)

    return (
        <div>
            <Navbar></Navbar>
            <center className=" my-3 text-[#a55e3f] font-garamond text-2xl ">ALL SERVICES</center>

            {/* Search field */}
            <div className="max-w-xs mx-auto">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 20l-5-5m2.5-6.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"/>
                            </svg>
                        </button>
                    </span>
                    <input
                        className="w-full py-2 pl-10 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder="Search by name..."
                        autoComplete="off"
                        onChange={(e) => setSearchCategory(e.target.value)}
                    />
                </div>
            </div>

            {/*All Cards */}
            <div className=" flex flex-wrap gap-3 items-center justify-center p-3">
                    {collections.slice(0, cardsToShow).map((collection) => (
                    <ServiceCards key={collection._id} collection={collection}></ServiceCards>
                    ))}
            </div>
            {/* Button shown with a condition */}
                {
                cardsToShow < collections.length && (
                        <center>
                            <button onClick={handleShowAll} className="bg-red-500 my-3  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Show All
                            </button>
                        </center> )
                }
        
        </div>
       
    );
};

export default Services;