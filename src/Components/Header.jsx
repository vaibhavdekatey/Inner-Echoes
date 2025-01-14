import React from "react";

function Header({ headerColor, absoluteStyles }) {
  return (
    <>
      <div
        className="justify-between flex flex-row items-center m-12 "
        style={{
          textShadow: "#000 1px 0 5px",
        }}
      >
        <p className="text-neutral-200 font-dmSerif text-6xl drop-shadow-lg ">
          INNER ECHOES
        </p>
        <div className="justify-between">
          <a
            href="#"
            className="text-neutral-200 ml-4 tracking-widest font-lexendDeca font-light shadow-md"
          >
            HOME
          </a>
          <a
            href="#"
            className="text-neutral-200 ml-4 tracking-widest font-lexendDeca font-light shadow-md"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-neutral-200 ml-4 tracking-widest font-lexendDeca font-light shadow-md"
          >
            CONTACT
          </a>
          <a
            href="#"
            className="text-neutral-200 ml-4 tracking-widest font-lexendDeca font-light shadow-md"
          >
            PORTFOLIO
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
