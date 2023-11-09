import { useEffect, useState } from "react";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import MyServiceCards from "./MyServiceCards";
import Navbar from "../Home/Components/Navbar";
import { useContext } from "react";
import { Context } from "../../Context/AllContext";
import Swal from 'sweetalert2'
// import axios from "axios";
import {Helmet} from "react-helmet";

const MyServices = () => {

    const {user} = useContext(Context)
    const myEmail = user?.email;

    // const myEmail = 'sharifrayhannafi@gmail.com'
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
    }, [allCards, myEmail]);

    // console.log(allCards)

    const handleDeleteItem = async (_id) => {
        console.log(_id);
        const id = _id;
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
    
        if (result.isConfirmed) {
            try {
                const uurl =`/services/${id}?email=${myEmail}`
                const response = await axiosSecure.delete(uurl, _id,);
                // const data = response.data;
    
                if (response.data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    );
    
                    const thoseremaining = filteredCards?.filter((uItem) => uItem._id !== _id);
                    setFilteredCards(thoseremaining);
                } else {
                    Swal.fire('Failed to Delete!');
                }
            } catch (error) {
                console.error('Error occurred during deletion:', error);
                Swal.fire('Failed to Delete!', '', 'error');
            }
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Artvend | My Services</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <center className=" my-3 text-[#a55e3f] font-garamond text-2xl uppercase">My Services</center>
            <div className=" flex gap-3 flex-wrap items-center justify-center">
            {
                filteredCards.map(filteredCard => (
                    <MyServiceCards  handleDeleteItem={handleDeleteItem} key={filteredCard._id} filteredCard={filteredCard}></MyServiceCards>
                ))
            }
             {
                    filteredCards?.length == 0 && (
                        <center className="my-6">You have no services available</center>
                    )
                }
            </div>
        </div>
    );
};

export default MyServices;