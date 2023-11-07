import { useEffect, useState } from "react";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import MyServiceCards from "./MyServiceCards";
import Navbar from "../Home/Components/Navbar";


const MyServices = () => {

    const myEmail = 'sharifrayhannafi@gmail.com'
    const [allCards, setAllCards] = useState([])
    const [filteredCards, setFilteredCards] = useState([])

    const axiosSecure = useAxiosSecure()
    const url = '/services';

     useEffect(()=>{

        axiosSecure.get(url)
        .then(res => setAllCards(res.data))
    
    },[url,axiosSecure])

    useEffect(() => {
        const filteredCards = allCards.filter(card =>
            card.service_provider_email.includes(myEmail)
        );
        setFilteredCards(filteredCards);
    }, [allCards]);

    console.log(allCards)

    return (
        <div>
            <Navbar></Navbar>
            <center className=" my-3 text-[#a55e3f] font-garamond text-2xl uppercase">My Services</center>
            <div className=" flex gap-3 flex-wrap items-center justify-center">
            {
                filteredCards.map(filteredCard => (
                    <MyServiceCards key={filteredCard._id} filteredCard={filteredCard}></MyServiceCards>
                ))
            }
            </div>
        </div>
    );
};

export default MyServices;