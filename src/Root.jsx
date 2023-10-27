import { Outlet } from "react-router-dom";
import Navbar from "./sheared/Navbar/Navbar";
import Footer from "./sheared/Footer/Footer";

const Root = () => {
    return (
        <div className=" max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;