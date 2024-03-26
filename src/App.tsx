// import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./assets/componet/Login/Login";
import Home from "./assets/componet/Home/Home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
