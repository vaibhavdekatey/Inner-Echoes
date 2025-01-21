import React, { useState } from "react";

function Header({ header, absoluteStyles }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="justify-between flex flex-row items-center py-4 px-2 bg-[#dbdbdb]">
        <a href="#" className="text-black font-dmSerif text-6xl ml-4">
          INNER ECHOES
        </a>
        <div className="flex flex-row justify-between items-center">
          <a
            href="/"
            className={`  transition-all ease-in-out ${
              header === "HOME"
                ? "italic bg-black text-white py-2 px-3 rounded-md"
                : "text-black ml-4 tracking-widest py-2 px-3 font-lexendDeca font-light hover:italic hover:text-neutral-600"
            }`}
          >
            HOME
          </a>
          <a
            href="About"
            className={`  transition-all ease-in-out ${
              header === "ABOUT"
                ? "italic bg-black text-white py-2 px-3 rounded-md ml-16 tracking-widest font-lexendDeca font-light"
                : "text-black ml-16 tracking-widest py-2 px-3 font-lexendDeca font-light hover:italic hover:text-neutral-600"
            }`}
          >
            ABOUT
          </a>
          <a
            href="#getintouch"
            className="text-black ml-16 tracking-widest font-lexendDeca font-light hover:italic hover:text-neutral-600 transition-all ease-in-out"
          >
            CONTACT
          </a>
          <div className="flex flex-row justify-center items-center ml-16 mr-6">
            <a
              onMouseOver={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
              href="https://www.vaibhavdekatey.site"
              className="text-black tracking-widest font-lexendDeca font-light  hover:text-neutral-600 transition-all ease-in-out"
            >
              PORTFOLIO
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className={`transition-opacity duration-500 -rotate-45 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              <path
                fill="none"
                stroke="#1e1e1e"
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
