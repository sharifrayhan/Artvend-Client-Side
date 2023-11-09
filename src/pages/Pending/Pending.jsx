import { useEffect, useState } from "react";
import useAxiosSecure from "../../Axios/useAxiosSecure";
// import { Link } from "react-router-dom";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { Context } from "../../Context/AllContext";

const Pending = () => {
    const [allCards, setAllCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const { user } = useContext(Context);
    const userEmail = user?.email;
    const axiosSecure = useAxiosSecure();
    const url = `/bookings?email=${userEmail}`;

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setAllCards(res.data))
    }, [url, axiosSecure]);

    console.log(allCards)

    useEffect(() => {
        const matchedCards = allCards?.filter((card) => card.service_provider_email === userEmail);
        setFilteredCards(matchedCards);
    }, [allCards, userEmail]);

   

    const statusUpdateModal = (id) => {
        Swal.fire({
            title: 'Update Booking Status',
            html: `
                <select id="statusSelect" class="swal2-select">
                    <option value="Pending">Pending</option>
                    <option value="In progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            `,
            showCancelButton: true,
            focusConfirm: false,
        }).then(async (result) => {
            if (result.isConfirmed) {
                const selectedStatus = document.getElementById('statusSelect').value;
                try {
                    const url = `/bookings/${id}?email=${userEmail}`;
                    const response = await axiosSecure.put(url, { booking_status: selectedStatus });

                    if (response.status === 200) {
                        Swal.fire('Success!', 'Booking status updated!', 'success');
                    
                        // Changing only the updated card in allcards 
                        const updatedCard = allCards.map(card => {
                            if (card._id === id) {
                                return { ...card, booking_status: selectedStatus };
                            }
                            return card;
                        });
        
                        setAllCards(updatedCard);
                 
                    } else {
                        Swal.fire('Error', 'Failed to update booking status', 'error');
                    }
                } catch (error) {
                    Swal.fire('Error', 'Failed to update booking status', 'error');
                }
            }
        });
    };

    return (
<div>
        <center className="mb-6 text-[#a55e3f] font-garamond uppercase font-semibold text-3xl">My Pending Works</center>
        <div >
            <div className="flex flex-wrap items-center justify-center gap-4">
                {filteredCards.map((filteredCard) => (
                    <div key={filteredCard?._id} className="bg-gray-100 w-[570px] min-h-[243px] flex flex-col md:flex-row lg:flex-row gap-3 p-4 rounded-lg">
                        <img className="h-[260px] object-cover rounded-lg" src={filteredCard?.service_image} alt={filteredCard?.service_name} />
                           <div className="flex justify-between w-full">
                                    <div className="pr-3">
                                        <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-2">{filteredCard?.service_name}</h2>
                                        <p className="text-sm mb-2">Status: {filteredCard?.booking_status}</p>
                                        <p className="text-sm mb-2">Service Date: {filteredCard?.service_taking_date}</p>
                                        {/* <p className="text-sm mb-2">Special Instructions: {filteredCard?.special_instructions}</p> */}
                                        <h2 className="text-sm mb-2 relative hover:text-blue-500">Special Instructions: Hover under
                                            <p className="absolute bg-gray-200 p-4  w-40 transition-opacity opacity-0 hover:opacity-100">
                                            {filteredCard?.special_instructions}
                                            </p>
                                        </h2>
                                        <p className="text-sm mb-2">Client Email: {filteredCard?.user_email}</p>
                                        <p className="text-sm mb-2">Price: {filteredCard?.service_price}</p>
                                   
                                        <button onClick={() => statusUpdateModal(filteredCard._id)} className="bg-red-500 my-3 text-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Update Status
                                        </button>
                              
                                    </div>
                                     
                           </div>
                        {/* <Link to={`/Details/${filteredCard?._id}`}>
                            <button className="bg-blue-500 text-white rounded-md px-4 py-2">Details</button>
                        </Link> */}
                                       
                    </div>
                    
                ))}
                 {
                    filteredCards?.length == 0 && (
                        <center className="my-6">You have no pending work available</center>
                    )
                }
            </div>
        </div>
    </div>
    );
};

export default Pending;
