import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import RecipeForm from "../pages/RecipeForm";

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
        {
          path: "/recipes/create",
          element: <RecipeForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
