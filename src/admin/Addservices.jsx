import Banner from "../sheared/Banner/Banner";
import Form from "../sheared/Form/Form";

const Addservices = () => {
    const prop={
        name: "Add Services",
        route: "Home/add/services"
    }
    return (
        <div className=" w-full mx-auto">
            <Banner props={prop}></Banner>
            <div className=" px-5 py-5">
                <Form></Form>
            </div>
        </div>
    );
};

export default Addservices;