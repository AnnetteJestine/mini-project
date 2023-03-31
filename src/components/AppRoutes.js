import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Login = React.lazy(() => import("../pages/login/Login"));
const Layout = React.lazy(() => import("./Layout"));
const Posts = React.lazy(() => import("../pages/posts/Posts"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
    ],
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
