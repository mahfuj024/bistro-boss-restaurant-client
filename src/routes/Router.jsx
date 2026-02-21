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

// Create Browser Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />, // ✅ element instead of Component
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // ✅ element
      { path: "OurMenu", element: <OurMenu /> },
      { path: "OrderFood", element: <OrderFood /> },
      { path: "OrderFood/:category", element: <OrderFood /> },
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, // ✅ element
    children: [
      { path: "cart", element: <Cart /> }, // ✅ nested route
      // Add other nested routes here if needed
    ],
  },

  // Optional: redirect "/cart" to "/dashboard/cart"
  {
    path: "/cart",
    element: <Navigate to="/dashboard/cart" replace />,
  },
]);
