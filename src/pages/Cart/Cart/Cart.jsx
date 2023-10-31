import { useContext, useEffect, useState } from "react";
import Service from "../Service/Service";
import axios from "axios";
import { Authcontext } from "../../../providers/Authprovider";

const Cart = () => {
  const {user} = useContext(Authcontext)
  const [services, setServices] = useState();
  const [rander, setRander] = useState(false);
  // console.log(user.email)
  useEffect(() => { 
    axios.get(`http://localhost:5000/cart/${user.email}`,{withCredentials: true})
    .then(result => setServices(result.data))
    .catch(err => console.log(err))
   },[rander])
   const handleDelete= (id) => { 
    axios.delete(`http://localhost:5000/cart/${id}`)
    .then(result => {
      console.log(result.data)
      setRander(!rander)
    })
    .catch(err => console.log(err))
   }
  return (
    <div className=" my-14 flex flex-col justify-center items-center">
        <div className=" flex justify-center py-10">
            <h2 className=" text-3xl font-bold">My Cart</h2>
        </div>
        <div className=" grid grid-cols-1 gap-8">
        {
          services?.map(service =>
            <Service
            key={service._id}
            service={service}
            handleDelete={handleDelete}
            ></Service>
            )
        }
        </div>
    </div>
  );
};

export default Cart;
