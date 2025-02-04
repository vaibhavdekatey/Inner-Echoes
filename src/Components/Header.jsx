import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header({ header, absoluteStyles }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="justify-center flex flex-col items-center bg-[#0f0f0f]">
        <NavLink
          to={"/"}
          className="text-white font-dmSerif  justify-center flex flex-col items-center my-12 mt-14 lg:w-[36vw] "
        >
          <p className="text-white uppercase font-lexendDeca md:text-xl lg:text-xl font-light tracking-widest text-center w-full px-3">
            Everything is personal here including this blog
          </p>
          <span className="w-full text-center tracking-wide md:text-8xl lg:text-8xl">
            INNER ECHOES
          </span>
        </NavLink>

        <div className="flex flex-row justify-center items-center border-y-[1px] w-[140vw]">
          <NavLink
            to={"/"}
            className={`  transition-all ease-in-out w-[160px] border-x-[1px] border-solid border-white text-center ${
              header === "HOME"
                ? "italic bg-white text-black py-2 px-3 "
                : "text-white tracking-widest py-2 px-3 font-lexendDeca font-light  hover:text-cyan-500"
            }`}
          >
            HOME
          </NavLink>
          <NavLink
            to={"/About"}
            className={`  transition-all ease-in-out w-[160px] border-x-[1px] border-solid text-center border-white  ${
              header === "ABOUT"
                ? "italic bg-white text-black py-2 px-3 tracking-widest font-lexendDeca font-light"
                : "text-white tracking-widest py-2 px-3 font-lexendDeca font-light  hover:text-cyan-500"
            }`}
          >
            ABOUT
          </NavLink>
          <NavLink
            to={"/Posts"}
            className={`  transition-all ease-in-out w-[160px] border-x-[1px] border-solid text-center border-white  ${
              header === "allPosts"
                ? "italic bg-white text-black py-2 px-3 tracking-widest font-lexendDeca font-light"
                : "text-white tracking-widest py-2 px-3 font-lexendDeca font-light  hover:text-cyan-500"
            }`}
          >
            ALL POSTS
          </NavLink>
          <a
            href="#getintouch"
            className="text-white tracking-widest font-lexendDeca w-[160px] font-light text-center hover:text-cyan-500 transition-all ease-in-out"
          >
            CONTACT
          </a>
          <div className="flex flex-row justify-center items-center border-x-[1px] w-[180px] border-solid border-white text-center ">
            <a
              onMouseOver={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
              target="_blank"
              href="https://www.vaibhavdekatey.site"
              className="text-white tracking-widest font-lexendDeca font-light text-center h-[40px] p-2 hover:text-cyan-400 transition-all ease-in-out"
            >
              PORTFOLIO
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className={`transition-all ease-in-out duration-500 -rotate-45 ${
                visible ? "opacity-100" : "hidden opacity-0"
              }`}
            >
              <path
                fill="none"
                stroke="#22d3ee"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="0.7"
                d="m14 16l4-4m0 0l-4-4m4 4H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
