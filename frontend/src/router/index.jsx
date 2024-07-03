import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";

export default function index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
