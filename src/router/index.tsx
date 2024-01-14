import Homepage from "@/client/home-page/Homepage";
import {  RouteObject, createBrowserRouter } from "react-router-dom";

function wrapRouters(routes: RouteObject[]) {
    const router = createBrowserRouter([{
        path: "/",
        element: <Homepage/>,
        children: routes,
    }, {
        path: "*",
        element: <></>
    }])

    return router;
}



const router = wrapRouters([])

export default router;
