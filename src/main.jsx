import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";
import Hi from "./pages/hi";
import Bye from "./pages/bye";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Root />,
  //   errorElement: <ErrorPage />,
  //   loader: rootLoader,
  //   action: rootAction,
  //   children: [
  //     {
  //       path: "contacts/:contactId",
  //       element: <Contact />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <Hi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bye",
    element: <Bye />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
