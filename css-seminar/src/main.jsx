import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Margin from "./pages/Margin";
import Flexbox from "./pages/Flexbox";
import Position from "./pages/Position";
import Examples from "./pages/Examples";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/margin",
    element: <Margin/>
  },
  {
    path: "/flexbox",
    element: <Flexbox/>
  },
  {
    path: "/position",
    element: <Position/>
  },
  {
    path: "/examples",
    element: <Examples/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
