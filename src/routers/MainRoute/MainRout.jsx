import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../../pages/Home/Home";

const MainRoute = createBrowserRouter([
    {
        path:'/',
        element:  <Root></Root>,
        // errorElement: ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default MainRoute;