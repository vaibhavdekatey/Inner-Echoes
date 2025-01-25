import React from "react";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="flex flex-row justify-between items-center h-10 bg-neutral-300 px-[22vw] border-y-black border-[1px] ">
      <p className="text-black font-dmSerif text-xl">Inner Echoes</p>
      <div className="flex flex-row items-center">
        <p className="text-black font-lexendDeca text-lg">Designed By</p>
        <img src={logo} className="w-8 h-full ml-1 text-black p-1" />
      </div>
      <div className="flex flex-row">
        <img src={instagram} className="w-6 h-6 ml-2" />
        <img src={twitter} className="w-6 h-6 ml-2" />
        <img src={youtube} className="w-6 h-6 ml-2" />
      </div>
    </div>
  );
}

export default Footer;
