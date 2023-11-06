import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Axios/useAxiosSecure";
import FeaturedCard from "./FeaturedCard";



const Featured = () => {
    const [collections, setCollections] = useState([])
    const [filteredCollections, setFilteredCollections] = useState([])

    const axiosSecure = useAxiosSecure()
    const url = '/services';

    useEffect(()=>{

        axiosSecure.get(url)
        .then(res => setCollections(res.data))
    
    },[url,axiosSecure])

    console.log(collections)

    useEffect(()=>{

        const filteredCollections = collections.filter(collection =>
            [
                '6548c507b6454146f146f6e2',
                '6548c507b6454146f146f6f6',
                '6548c507b6454146f146f700',
                '6548c507b6454146f146f708'
            ].includes(collection._id)
        );

        setFilteredCollections(filteredCollections)

    },[collections])

    console.log(filteredCollections)

    return (
        <div className=" ">
            
            <center>
                <h1 className=" mb-6 font-zolina font-semibold text-3xl">Popular Services</h1>
            </center>

            <div className="flex flex-wrap gap-3 items-center justify-center">
            {
            filteredCollections.map(collection => (
                <FeaturedCard key={collection._id} collection={collection}></FeaturedCard>
            ))
             }
            </div>

            <center>
                <button className="bg-red-500 my-3  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Show All</button>
            </center>

        </div>
    );
};

export default Featured;