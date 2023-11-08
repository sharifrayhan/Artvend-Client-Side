import { useEffect, useState } from "react";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { Context } from "../../Context/AllContext";

const Pending = () => {
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
                    const url = `/bookings/${id}`;
                    const response = await axiosSecure.put(url, { booking_status: selectedStatus });

                    if (response.status === 200) {
                        Swal.fire('Success!', 'Booking status updated!', 'success');
                        // You might want to update the UI here if needed
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
        <div className="flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-4">
                {filteredCards.map((filteredCard) => (
                    <div key={filteredCard._id} className="bg-gray-100 p-4 rounded-lg">
                        <img className="h-64 rounded-lg mb-4" src={filteredCard?.service_image} alt={filteredCard?.service_name} />
                        <h2 className="text-lg font-semibold mb-2">{filteredCard?.service_name}</h2>
                        <p className="text-sm mb-2">Status: {filteredCard?.booking_status}</p>
                        <p className="text-sm mb-2">Service Date: {filteredCard?.service_taking_date}</p>
                        <p className="text-sm mb-2">Special Instructions: {filteredCard?.special_instructions}</p>
                        <p className="text-sm mb-2">Client Email: {filteredCard?.user_email}</p>
                        <p className="text-sm mb-2">Price: {filteredCard?.service_price}</p>
                        <center>
                        <button onClick={() => statusUpdateModal(filteredCard._id)} className="bg-red-500 my-3  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Update Status
                        </button>
                        </center>
                        {/* <Link to={`/Details/${filteredCard?._id}`}>
                            <button className="bg-blue-500 text-white rounded-md px-4 py-2">Details</button>
                        </Link> */}
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Pending;
