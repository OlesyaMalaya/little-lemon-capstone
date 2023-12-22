import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./data/routes";
import Layout from "./layouts/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import LoginPage from "./pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.MENU,
        element: <MenuPage />,
      },
      {
        path: ROUTES.RESERVATION,
        element: <ReservationPage />,
      },
      {
        path: ROUTES.ORDER,
        element: <OrderPage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]);
