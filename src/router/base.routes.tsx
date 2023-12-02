import { RouteObject } from "react-router-dom";

const baseRoutes: RouteObject = {
    path: "/",
    children: [
        {
            path: "/",
            element: <div>Home</div>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
            path: "/contact",
            element: <div>Contact</div>
        }
    ]
}

export default baseRoutes;