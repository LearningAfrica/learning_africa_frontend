import adminRouter from "@/modules/admin";
import baseRoutes from "./base.routes";
import AppLayout from "@/components/layouts/AppLayout";
import BaseErrorPage from "@/views/BaseErrorPage";
import NotFoundPage from "@/views/NotFoundPage";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import instructorRouter from "@/modules/instructor";

function wrapRouters (routes: RouteObject[]) {
    const router = createBrowserRouter([{
        path: "/",
        element: <AppLayout />,
        children: routes,
        errorElement: <BaseErrorPage/>
    }, {
        path: "*",
        element: <NotFoundPage/>
    }])

    return router;
}



const router = wrapRouters([baseRoutes,adminRouter,instructorRouter])

export default router;
