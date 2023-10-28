import Banner from "../sheared/Banner/Banner";

const Addservices = () => {
    const prop={
        name: "Add Services",
        route: "Home/add/services"
    }
    return (
        <div className=" w-full mx-auto">
            <Banner props={prop}></Banner>
        </div>
    );
};

export default Addservices;