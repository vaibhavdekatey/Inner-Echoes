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
import Post from "./Post";
import AllPosts from "./AllPosts";
import Checkthese from "./Components/Checkthese";
import MiniMe from "./Components/MiniMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className=" ">
          <Header header="HOME" />
        </div>
        <Homepage />

        <GetinTouch />
        <Footer />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <div className="">
          <Header header="ABOUT" />
        </div>
        <AboutMe />
        <MailMe />
        <Checkthese />
        <GetinTouch />
        <Footer />
      </>
    ),
  },
  {
    path: "/Post/:id",
    element: (
      <>
        <div className="">
          <Header />
        </div>
        <Post />
        <GetinTouch />
        <Footer />
      </>
    ),
  },
  {
    path: "/featuredPost",
    element: (
      <>
        <div className=" ">
          <Header />
        </div>

        <FeaturedPost />
        <MailMe />
        <GetinTouch />
        <Footer />
      </>
    ),
  },
  {
    path: "/Posts",
    element: (
      <>
        <div className="  ">
          <Header header="allPosts" />
        </div>

        <AllPosts />
        <MailMe />
        <div className="w-full flex justify-center items-center mb-[5vw]">
          <div className="w-8/12">
            <MiniMe />
          </div>
        </div>

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
