import Service from "../Service/Service";

const Cart = () => {
  return (
    <div className=" my-14 flex flex-col justify-center items-center">
        <div className=" flex justify-center py-10">
            <h2 className=" text-3xl font-bold">My Cart</h2>
        </div>
        <div className=" grid grid-cols-1 gap-8">
        <Service></Service>
        </div>
    </div>
  );
};

export default Cart;
