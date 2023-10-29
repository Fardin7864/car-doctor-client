import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../../pages/Home/Home";
import Details from "../../pages/Details/Details";
import Addservices from "../../admin/Addservices";
import Cart from "../../pages/Cart/Cart/Cart";
import Signup from "../../pages/Signup/Signup";
import Login from "../../pages/Login/Login";
import PrivetRoute from "../Privet/PrivetRoute";

const MainRoute = createBrowserRouter([
    {
        path:'/',
        element:  <Root></Root>,
        // errorElement: ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <PrivetRoute><Details></Details></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/add/services',
                element: <Addservices></Addservices>
            },
            {
                path: '/cart',
                element: <PrivetRoute><Cart></Cart></PrivetRoute>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default MainRoute;