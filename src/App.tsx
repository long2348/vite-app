// import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./assets/componet/Login/Login";
import Home from "./assets/componet/Home/Home";
import "./App.css";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

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
      <ChakraProvider theme={theme}>
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </ChakraProvider>
    </>
  );
};

export default App;
