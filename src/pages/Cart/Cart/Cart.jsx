import img from '../../../assets/images/services/3.jpg'

const Cart = () => {
  return (
    <div className=" my-14 flex flex-col justify-center items-center">
        <div className=" flex justify-center py-10">
            <h2 className=" text-3xl font-bold">My Cart</h2>
        </div>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl h-32"
          />
          <div className='w-full flex items-start gap-16'>
            <div>
            <h1 className="text-2xl font-bold">Box Office News!</h1>
            <p className="">
              service type
            </p>
            </div>
            <div>
                <h5 className=' font-bold'>Price</h5>
                <p>$333</p>
            </div>
            <div>
                <h5 className=' font-bold'>Date</h5>
                <p>12/22/23</p>
            </div>
            <button className="btn bg-orange-600 text-white">Painding</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
