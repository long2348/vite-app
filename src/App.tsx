import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./assets/componet/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
