import React from "react";
import Header from "./Components/Header";
import texture from "./assets/texture.png";

function Homepage() {
  return (
    <>
      <div className="m-2">
        <div className="sticky top-0 z-20 mx-6 ">
          <Header />
        </div>
        <div className="flex items-center justify-center m-3 rounded-2xl absolute top-0 w-[98vw]">
          <img
            src={texture}
            alt="texture"
            className="w-full rounded-2xl h-[90dvh] object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;
