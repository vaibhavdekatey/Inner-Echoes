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
        className="border-[1px] border-black px-4 w-32 h-10 text-center rounded-md font-dmSerif hover:italic hover:bg-white/80 transition-all ease-in-out text-base p-2 m-2 align-text-top"
      >
        Mail Me
      </a>
    </div>
  );
}

export default GetinTouch;
