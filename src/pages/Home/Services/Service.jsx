const Service = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className=" h-64 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className=" text-[#FF3811] font-medium">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
