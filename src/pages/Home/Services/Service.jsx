import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, photo, price } = service.service;

  return (
    <div className="card card-compact bg-base-100 shadow-xl my-10">
      <figure>
        <img
          src={photo}
          alt="Shoes"
          className=" h-64 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className=" text-[#FF3811] font-medium">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${service._id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
