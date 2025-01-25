import React from "react";

function GetinTouch() {
  return (
    <div
      id="getintouch"
      className="bg-neutral-400 h-[70vh] flex flex-col justify-center items-center"
    >
      <p className="text-black font-dmSerif text-7xl mb-8">Get in Touch</p>
      <p className="text-black font-lexendDeca font-extralight text-xl w-[40vw] mb-8 text-center">
        My inbox is always open. Whether you have a question or just want to say
        hello, I'll try my best to get back to you! Feel free to mail me.
      </p>
      <a
        href="#"
        className="bg-black transition-all ease-in-out w-32 h-12 border-white/20 text-white border-[1px] hover:bg-white hover:text-black rounded-md font-dmSerif text-center justify-center items-center flex text-base p-2 m-2 "
      >
        Mail Me
      </a>
    </div>
  );
}

export default GetinTouch;
