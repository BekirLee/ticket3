import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Latest from "./pages/Latest";
import Pages from "./pages/Pages";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Basket from "./pages/Basket";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/latest",
          element: <Latest />,
        },
        {
          path: "/pages",
          element: <Pages />,
        },
        {
          path: "/men",
          element: <Men />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
