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
import AboutMe from "./AboutMe";
import FeaturedPost from "./FeaturedPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="sticky top-0 z-20 ">
          <Header header="HOME" />
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
          <Header header="ABOUT" />
        </div>
        <AboutMe />
        <MailMe />
        <GetinTouch />
        <Footer />
      </>
    ),
  },
  {
    path: "/Post/:id",
    element: (
      <>
        <div className="sticky top-0 z-20 ">
          <Header />
        </div>

        <GetinTouch />
        <Footer />
      </>
    ),
  },
  {
    path: "/featuredPost",
    element: (
      <>
        <div className="sticky top-0 z-20 ">
          <Header />
        </div>

        <FeaturedPost />
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
