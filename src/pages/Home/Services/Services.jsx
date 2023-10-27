import axios from "axios";
import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const [services, setServices] = useState();
    useEffect(() => { 
        axios('/services.json')
        .then(data => setServices(data.data))
     }, [])


    return (
        <div className=" mt-10">
            <div className=" mx-auto w-full text-center my-10">
                <h5 className=" text-[#FF3811] text-lg font-bold">Services</h5>
                <h2 className=" text-5xl font-bold"> Our Service Area</h2>
                <p className=" text-gray-600">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
                {
                    services?.map(service => 
                    <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;