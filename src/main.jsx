import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import Contact from "./Pages/Contact.jsx";
import Details from "./Pages/Details.jsx";
import Cart from "./Pages/Cart.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/product",
        loader: () => fetch("https://fakestoreapi.com/products"),
        element: <Products />,
      },
      {
        path: "/contact",

        element: <Contact />,
      },
      {
        path: "/product/:productId",
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.productId}`),
        element: <Details />,
      },
      {
        path: "/cart/:productId",
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.productId}`),
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
