import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../../pages/Home/Home";
import Details from "../../pages/Details/Details";
import Addservices from "../../admin/Addservices";
import Cart from "../../pages/Cart/Cart/Cart";
import Signup from "../../pages/Signup/Signup";

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
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/add/services',
                element: <Addservices></Addservices>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default MainRoute;