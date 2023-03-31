import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Login = React.lazy(() => import("../pages/login/Login"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: <h2>Home</h2>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={routers} />
    </Suspense>
  );
};

export default AppRoutes;
