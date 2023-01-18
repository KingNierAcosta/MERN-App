import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

import "./App.css";
import Root from "./user/pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/places/new",
        element: <NewPlace />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
