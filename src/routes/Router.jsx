import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";
import OurMenu from "../pages/OurMenu/OurMenu";
import OrderFood from "../pages/OrderFood/OrderFood";
import AuthLayouts from "../layouts/AuthLayouts";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";


// Create Browser Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "OurMenu", element: <OurMenu /> },
      { path: "OrderFood", element: <OrderFood /> },
      { path: "OrderFood/:category", element: <OrderFood /> },
      { path: "Contact", element: <Contact></Contact> },
    ],
  },
  {
    path: "/",
    element: <AuthLayouts />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // Users Routes
      { path: "user-home", element: <UserHome></UserHome> },
      { path: "cart", element: <Cart /> },
      { path: "payment", element: <Payment></Payment> },

      // Admin Routes
      { path: "all-users", element: <AdminRoute><AllUsers></AllUsers></AdminRoute> },
      { path: "add-items", element: <AdminRoute><AddItems></AddItems></AdminRoute> },
      { path: "manage-items", element: <AdminRoute><ManageItems></ManageItems></AdminRoute> },
      { path: "update-item/:id", element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute> },
      { path: "admin-home", element: <AdminRoute><AdminHome></AdminHome></AdminRoute> }
    ],
  },

  // Optional: redirect "/cart" to "/dashboard/cart"
  {
    path: "/cart",
    element: <Navigate to="/dashboard/cart" replace />,
  },
]);
