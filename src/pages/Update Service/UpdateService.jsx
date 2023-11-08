import { useContext } from "react";
import Navbar from "../Home/Components/Navbar";
import { Context } from "../../Context/AllContext";
import Swal from 'sweetalert2'
import {useParams} from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../Axios/useAxiosSecure";


const UpdateService = () => {
    const [allCards, setAllCards] = useState([])
    const [filteredCard, setFilteredCard] = useState([])
    const {user} = useContext(Context)

    // const userName = user?.displayName;
    // const userPhoto = user?.photoURL;
    const userEmail = user?.email;

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


    const handleUpdateService = async event => {
        event.preventDefault();
        const form = event.target;
        const service_name = form.serviceName.value;
        const service_location_area = form.serviceLocation.value;
        const service_price = form.servicePrice.value;
        const service_image = form.serviceImage.value;
        const service_description = form.serviceDetails.value;
        const service_provider_name = form.providerName.value;
        const service_provider_image = form.providerImage.value;
        const service_provider_email = form.providerEmail.value;

        const updatedService = {
            service_name,
            service_location_area,
            service_price,
            service_image,
            service_description,
            service_provider_name,
            service_provider_image,
            service_provider_email
        };
        try {
            const url = `/services/${filteredCard?._id}`;
            const response = await axiosSecure.put(url, updatedService);
            if (response.status === 200) {
                Swal.fire('Success!', 'Service updated!', 'success');
            } else {
                Swal.fire('Error', 'Failed to update service', 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Failed to update service', 'error');
        }
    };
    

    return (
        <div className="bg-[url(https://i.ibb.co/gddjk3j/bg-vv.jpg)] bg-no-repeat p-1">
        <Navbar></Navbar>
        <div className=" ">
          <div className="min-w-[100px] mx-2 md:mx-10 lg:mx-24 mt-5 mb-10">
            <div className="w-full max-w-md mx-auto">
              <div className="py-10 px-14 bg-[#D7CBA3] rounded-md">
                <div className="text-center my-5">
                  <h1 className="mb-6 text-[#a55e3f] font-garamond uppercase font-semibold text-3xl">Update Service</h1>
                  <p className="text-gray-700">You can update your service from here.</p>
                </div>

                    <form onSubmit={handleUpdateService} className="">

                            <div className="flex flex-col">
                                <div className="mb-4 ">
                                <label className="block font-semibold text-gray-700" htmlFor="serviceName">
                                    Service Name:
                                </label>
                                <input
                                    type="text"
                                    name="serviceName"
                                    required
                                    defaultValue={filteredCard?.service_name}
                                    placeholder="Enter Your Service Name"
                                    className="w-full border rounded px-3 py-2"
                                />
                                </div>
                                <div className="mb-4 ">
                                <label className="block font-semibold text-gray-700" htmlFor="serviceLocation">
                                    Service Location:
                                </label>
                                <input
                                    type="text"
                                    name="serviceLocation"
                                    required
                                    defaultValue={filteredCard?.service_location_area}
                                    placeholder="Enter your service location"
                                    className="w-full border rounded px-3 py-2 "
                                />
                                </div>
                            </div>


                            <div className="flex flex-col">
                                <div className="mb-4 ">
                                <label className="block font-semibold text-gray-700" htmlFor="servicePrice">
                                    Service Price:
                                </label>
                                <input
                                    type="text"
                                    name="servicePrice"
                                    required
                                    defaultValue={filteredCard?.service_price}
                                    placeholder="Enter your service price"
                                    className="w-full border rounded px-3 py-2 "
                                />
                                </div>
                                <div className="mb-4 ">
                                <label className="block font-semibold text-gray-700" htmlFor="serviceImage">
                                    Service Image:
                                </label>
                                <input
                                    type="url"
                                    name="serviceImage"
                                    required
                                    defaultValue={filteredCard?.service_image}
                                    placeholder="Enter your service image url"
                                    className="w-full border rounded px-3 py-2"
                                />
                                </div>
                            </div>


                            <div className="flex flex-col">
                                
                                <div className="mb-4 ">
                                <label className="block font-semibold text-gray-700" htmlFor="serviceDetails">
                                     Service Details:
                                </label>
                                <textarea
                                    name="serviceDetails"
                                    required
                                    defaultValue={filteredCard?.service_description}
                                    placeholder="Enter your service Details"
                                    className="w-full h-[42px] border rounded px-3 py-2"
                                />
                                </div>
                                
                                <div className="mb-4 ">
                                <label className="block font-semibold text-gray-700" htmlFor="providerName">
                                    Service Provider Name:
                                </label>
                                <input
                                    type="text"
                                    defaultValue={filteredCard?.service_provider_name}
                                    required
                                    name="providerName"
                                    placeholder="Enter service provider name"
                                    className="w-full border rounded px-3 py-2"
                                />
                                </div>

                            </div>

                            <div className="flex flex-col">
                                
                                <div className="mb-4 ">
                                <label className="block font-semibold text-gray-700" htmlFor="providerEmail">
                                    Service Provider Email:
                                </label>
                                <input
                                    type="email"
                                    name="providerEmail"
                                    defaultValue={userEmail}
                                    readOnly
                                    required
                                    placeholder="Enter service provider email"
                                    className="w-full border rounded px-3 py-2"
                                />
                                </div>

                                <div className="mb-4 ">
                            <label className="block font-semibold text-gray-700" htmlFor="providerImage">
                                Service Provider Image:
                            </label>
                            <input
                                type="url"
                                name="providerImage"
                                defaultValue={filteredCard?.service_provider_image}
                                required
                                placeholder="Enter service provider image url"
                                className="w-full border rounded px-3 py-2"
                            />
                            </div>
                            </div>
                          <center>  <button
                            type="submit"
                            className="bg-red-500 my-3  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                            Update Service
                            </button></center>
      </form>
                </div>

            </div>

        </div>

        </div>
        </div>
    );
};

export default UpdateService;