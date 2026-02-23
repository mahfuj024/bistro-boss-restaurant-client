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
      { path: "cart", element: <Cart /> },

      // Admin Routes
      { path: "all-users", element: <AllUsers></AllUsers> }
      
    ],
  },

  // Optional: redirect "/cart" to "/dashboard/cart"
  {
    path: "/cart",
    element: <Navigate to="/dashboard/cart" replace />,
  },
]);
