import React from "react";

function Header({ headerColor, absoluteStyles }) {
  return (
    <>
      <div className="justify-between flex flex-row items-center py-4 px-2 bg-[#dbdbdb]">
        <a href="#" className="text-black font-dmSerif text-6xl ml-4">
          INNER ECHOES
        </a>
        <div className="justify-between">
          <a
            href="/"
            className="text-black ml-4 tracking-widest font-lexendDeca font-light hover:italic hover:text-neutral-600 transition-all ease-in-out"
          >
            HOME
          </a>
          <a
            href="About"
            className="text-black ml-16 tracking-widest font-lexendDeca font-light hover:italic hover:text-neutral-600 transition-all ease-in-out"
          >
            ABOUT
          </a>
          <a
            href="#getintouch"
            className="text-black ml-16 tracking-widest font-lexendDeca font-light hover:italic hover:text-neutral-600 transition-all ease-in-out"
          >
            CONTACT
          </a>
          <a
            href="https://www.vaibhavdekatey.site"
            className="text-black ml-16 mr-6 tracking-widest font-lexendDeca font-light hover:italic hover:text-neutral-600 transition-all ease-in-out"
          >
            PORTFOLIO
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
