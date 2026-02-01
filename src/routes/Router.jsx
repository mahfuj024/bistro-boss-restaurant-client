import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import OurMenu from "../pages/Our Menu/OurMenu";
import OurShop from "../pages/Our Shop/OurShop";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component : Home },
      {path : "/OurMenu", Component : OurMenu},
      {path : "/OurShop", Component : OurShop}
    ]
  }
]);
