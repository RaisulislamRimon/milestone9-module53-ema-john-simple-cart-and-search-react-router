import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Main from "./layouts/Main";
import productsAndCartLoader from "./loaders/productsAndCartLoader";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/orders",
          // loader: () => fetch("products.json"),
          loader: productsAndCartLoader,
          element: <Orders />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
