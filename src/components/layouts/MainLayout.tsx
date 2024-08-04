import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="container mx-auto bg-primary-dark p-4">
      <h1>Main Layout</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
