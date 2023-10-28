import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../../pages/Home/Home";
import Details from "../../pages/Details/Details";
import Addservices from "../../admin/Addservices";

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
                // loader: ({params}) => fetch()

            },
            {
                path: '/add/services',
                element: <Addservices></Addservices>
            }
        ]
    }
])

export default MainRoute;