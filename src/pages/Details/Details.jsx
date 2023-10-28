import { useLoaderData } from "react-router-dom";

const Details = () => {
    const service = useLoaderData();
    return (
        <div className=" my-11">
            <div className="">
                <img src={service.service.photo} alt="" className=" w-full rounded-lg"/>
                <div className=" relative bottom-20"> 
                <div className="bg-gradient-to-r pl-10 py-4 from-black to-transparent w-full rounded-b-lg">
                <button className=" btn btn-warning">Add to Cart</button></div>
                </div>
            </div>
            <div className=" my-9 flex flex-col gap-5 items-center">
                <h3 className=" text-3xl font-bold text-black">{service.service.name}</h3>
                <p>{service.service.details}</p>
            </div>
        </div>
    );
};

export default Details;