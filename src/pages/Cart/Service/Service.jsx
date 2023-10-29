


const Service = ({service, handleDelete}) => {

    return (
        <div className="hero-content flex-col lg:flex-row">
            <div>
                <button onClick={() => handleDelete(service._id)} className=' btn bg-gray-400 rounded-full px-4 py-2 text-white font-bold flex justify-center items-center'>x</button>
            </div>
          <img
            src={service?.photo}
            className="max-w-sm rounded-lg shadow-2xl w-36 h-20"
          />
          <div className='w-full flex items-start gap-16'>
            <div className=" grow">
            <h1 className="text-2xl font-bold">{service?.name}</h1>
            <p className="">
              service type
            </p>
            </div>
            <div>
                <h5 className=' font-bold'>Price</h5>
                <p>${service?.price}</p>
            </div>
            <div>
                <h5 className=' font-bold'>Date</h5>
                <p>{service?.date?.split('T')[0]}</p>
            </div>
            <button className="btn bg-orange-600 text-white">Painding</button>
        </div>
      </div>
    );
};

export default Service;