import React, { useState } from "react";

function MailMe() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="my-[10vh] flex flex-row lg:px-[18vw] md:px-[10vw] h-[16vh] justify-between items-center bg-neutral-800 border-solid border-y-[1px] border-white">
      <p className="text-white font-dmSerif text-4xl">Never Miss a New Post</p>
      <div className="flex flex-row">
        <form>
          <input
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`bg-transparent border-b-[1px] h-[4vh] w-[15vw] transition-all ease-linear self-end mx-4 outline-none focus:outline-none focus:ring-0 ${
              isFocused ? "border-b-[1px] border-cyan-700" : "border-white"
            }`}
          />
          <input
            type="submit"
            className="bg-black transition-all ease-in-out w-32 h-12 border-white/50 text-white border-[1px] hover:bg-white hover:text-black font-dmSerif text-base p-2"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  );
}

export default MailMe;
