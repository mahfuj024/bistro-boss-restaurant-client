import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component : Home }
    ]
  }
]);
