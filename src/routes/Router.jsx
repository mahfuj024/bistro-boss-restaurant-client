import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import OurMenu from "../pages/OurMenu/OurMenu";
import OrderFood from "../pages/OrderFood/OrderFood";
import AuthLayouts from "../layouts/AuthLayouts";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "OurMenu", Component: OurMenu },
      { path: "OrderFood", element : <PrivateRoute><OrderFood></OrderFood></PrivateRoute> }, // new
      { path: "OrderFood/:category", element : <PrivateRoute><OrderFood></OrderFood></PrivateRoute> },

    ]
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      { path: "register", Component: Register },
      { path: "login", Component: Login }
    ]
  }
]);
