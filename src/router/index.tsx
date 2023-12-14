import adminRouter from "@/modules/super-admin";
import AppLayout from "@/components/layouts/AppLayout";
import BaseErrorPage from "@/views/BaseErrorPage";
import NotFoundPage from "@/views/NotFoundPage";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import instructorRouter from "@/modules/instructor";
import studentRouter from "@/modules/students";
import baseRoutes from "@/modules/base";

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



const router = wrapRouters([baseRoutes,adminRouter,instructorRouter,studentRouter])

export default router;
