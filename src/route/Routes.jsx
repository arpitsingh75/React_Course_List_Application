import { createBrowserRouter, 
        createRoutesFromElements,
        Route, 
        RouterProvider } from "react-router-dom";
import { HomeLayout } from "../layouts/HomeLayout";
import { HomePage } from "../pages/HomePage";
import { QueryPage } from "../pages/QueryDetails";
import { NewQuery } from "../pages/NewQuery";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<HomeLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="newquery/:c_id/:c_name" element={<NewQuery />} />
            <Route path="queries" element={<QueryPage />} />
        </Route>
    )
);

export const Routes = () => {
    return (
        <RouterProvider router={router} />
    )
}