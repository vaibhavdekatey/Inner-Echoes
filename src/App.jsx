import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Homepage from "./Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Homepage />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
