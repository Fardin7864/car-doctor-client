import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";

const MainRoute = createBrowserRouter([
    {
        path:'/',
        element:  <Root></Root>,
        // errorElement: ,
        children: [
            
        ]
    }
])

export default MainRoute;