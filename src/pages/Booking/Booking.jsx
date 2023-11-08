import { useEffect, useState } from "react";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import Navbar from "../Home/Components/Navbar";
import { useContext } from "react";
import Swal from 'sweetalert2'
import { Context } from "../../Context/AllContext";

const Booking = () => {
    const [allCards, setAllCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const { user } = useContext(Context);
    const userEmail = user?.email;
    const axiosSecure = useAxiosSecure();
    const url = '/bookings';

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setAllCards(res.data))
    }, [url, axiosSecure]);

    useEffect(() => {
        const matchedCards = allCards?.filter((card) => card.user_email === userEmail);
        setFilteredCards(matchedCards);
    }, [allCards, userEmail]);


    const handleDeleteItem = async (_id) => {
        console.log(_id);
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
                const url = `/bookings/${_id}`
                const response = await axiosSecure.delete(url, _id,);
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
            <center className="mb-6 text-[#a55e3f] font-garamond uppercase font-semibold text-3xl">My Bookings</center>
            <div className="flex items-center justify-center">
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {filteredCards.map((filteredCard) => (
                        <div key={filteredCard?._id} className="bg-gray-100 p-4 rounded-lg">
                            <img className="w-full h-64 object-cover rounded-lg mb-4" src={filteredCard?.service_image} alt={filteredCard.service_name} />
                            <h2 className="text-lg font-semibold mb-2">{filteredCard?.service_name}</h2>
                            <p className="text-sm mb-2">Status: {filteredCard?.booking_status}</p>
                            <p className="text-sm mb-2">Service Date: {filteredCard?.service_taking_date}</p>
                            <p className="text-sm mb-2">Special Instructions: {filteredCard?.special_instructions}</p>
                            <p className="text-sm mb-2">Provider Email: {filteredCard?.service_provider_email}</p>
                            <p className="text-sm mb-2">Price: {filteredCard?.service_price}</p>
                       <center>
            <button
            onClick={()=>handleDeleteItem(filteredCard?._id)} 
            className=" text-white text-sm flex my-2 py-2 px-3 items-center justify-center rounded-md  border-[0.1px] border-red-500 my-3  hover:border-red-700"
            ><h1 className=" mr-1 text-red-500">Remove </h1>
            <img
                className="w-4 rounded-full avatar"
                src="https://i.ibb.co/sqNz6jc/delete.png"
                alt=""
            />
            </button>
        </center>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Booking;
