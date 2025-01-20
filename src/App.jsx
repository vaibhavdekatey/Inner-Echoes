import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Homepage from "./Homepage";
import Footer from "./Components/Footer";
import MailMe from "./Components/MailMe";
import GetinTouch from "./Components/GetinTouch";
import Header from "./Components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="sticky top-0 z-20 ">
          <Header />
        </div>
        <Homepage />
        <MailMe />
        <GetinTouch />
        <Footer />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <div className="sticky top-0 z-20 ">
          <Header />
        </div>

        <MailMe />
        <GetinTouch />
        <Footer />
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
