import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element: <Menu></Menu>,
        },
        {
            path:'/order/:category',
            element: <Order></Order>,
        },
        {
            path:'/login',
            element: <Login></Login>,
        },
        {
            path:'/signUp',
            element: <SignUp></SignUp>,
        },
    ]
  },
  {
    path:'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
        // normal user route
        {
            path: 'cart',
            element:<Cart></Cart>,
        },
        // admin routes
        {
            path: 'users',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
        },
        {
            path: 'addItems',
            element: <AdminRoute><AddItems></AddItems></AdminRoute>,
        },
    ]
  },
]);
