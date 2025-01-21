import React from "react";
import { author } from "../Articles/articles";

function MiniMe() {
  return (
    <>
      <div className="flex flex-col bg-slate-400/50  p-8 pb-9 mb-8">
        {/* <p className="text-black font-dmSerif text-3xl">Author</p>
        <div className="border-t-[1px] border-black/60 mb-4 w-11/12" /> */}
        <div className="flex flex-row w-full ">
          <div className="relative mr-6">
            <div className="absolute -right-[4px] -bottom-[4px] w-44 aspect-square bg-black rounded-2xl -z-10" />
            <img
              src={`${author.image}`}
              style={{ backgroundPosition: "bottom 10px right 10px" }}
              className="w-44 rounded-2xl aspect-square"
            />
          </div>
          <div className="flex flex-col flex-wrap w-2/3">
            <p className="text-black font-dmSerif text-3xl mb-1">
              By {author.name}
            </p>
            <p className="text-black/80 text-dm font-lexendDeca">
              {author.anotherAbout}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniMe;
