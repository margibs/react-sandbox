import { useRoutes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";

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
  ]);
};

export default Routes;
