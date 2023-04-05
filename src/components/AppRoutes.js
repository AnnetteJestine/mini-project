import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./Loading";

const NotFound = React.lazy(() => import("./NotFound"));
const Login = React.lazy(() => import("../pages/login/Login"));
const Layout = React.lazy(() => import("./Layout"));
const Posts = React.lazy(() => import("../pages/posts/Posts"));
const PostDetails = React.lazy(() => import("../pages/posts/PostDetails"));
const ToDo = React.lazy(() => import("../pages/ToDo/ToDo"));
const ToDoDetail = React.lazy(() => import("../pages/ToDo/ToDoDetail"));


const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "post/:id",
        element: <PostDetails />,
      },
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "post/:id",
        element: <ToDo />,
      },
      {
        index: true,
        element: <ToDoDetail />,
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
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routers} />
    </Suspense>
  );
};

export default AppRoutes;
