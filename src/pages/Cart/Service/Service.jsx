import img from '../../../assets/images/services/3.jpg'



const Service = () => {
    return (
        <div className="hero-content flex-col lg:flex-row">
            <div>
                <button className=' bg-gray-400 rounded-full px-4 py-2 text-white font-bold flex justify-center items-center'>x</button>
            </div>
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl w-36 h-20"
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
    );
};

export default Service;