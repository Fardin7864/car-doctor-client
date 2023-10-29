import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../providers/Authprovider";

const Details = () => {
    const service = useLoaderData();
    const {user} = useContext(Authcontext);
    const cartService = {
        name: service.service.name,
        photo: service.service.photo,
        price: service.service.price,
        email: user.email,
        date: new Date(),
    }
    const handleAdd = () => { 
        fetch('http://localhost:5000/cart',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartService)
        })
        .then(result => console.log(result))
        .catch(err => console.log(err))
     }
    return (
        <div className=" my-11">
            <div className="">
                <img src={service.service.photo} alt="" className=" w-full rounded-lg"/>
                <div className=" relative bottom-20"> 
                <div className="bg-gradient-to-r pl-10 py-4 from-black to-transparent w-full rounded-b-lg">
                <button onClick={handleAdd} className=" btn btn-warning">Add to Cart</button></div>
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