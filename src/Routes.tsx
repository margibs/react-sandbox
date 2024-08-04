import { useRoutes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Esheba from "./pages/esheba/Esheba";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <div>Home</div>,
        },
        {
          path: "/about",
          element: <div>About</div>,
        },
      ],
    },
    {
      path: "/esheba",
      element: <Esheba />,
    },
  ]);
};

export default Routes;
