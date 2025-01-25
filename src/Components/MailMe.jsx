import React, { useState } from "react";

function MailMe() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="my-[12vh] flex flex-row mx-[17vw] h-[16vh] rounded-2xl justify-between px-[10vw] items-center bg-neutral-400/60 border-solid border-[1px] border-neutral-900">
      <p className="text-black font-dmSerif text-3xl">Never Miss a New Post</p>
      <div className="flex flex-row">
        <form>
          <input
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`bg-transparent border-b-[1px] h-[4vh] transition-all ease-linear self-end mx-4 outline-none focus:outline-none focus:ring-0 ${
              isFocused ? "border-b-[1px] border-cyan-700" : "border-black"
            }`}
          />
          <input
            type="submit"
            className="bg-black transition-all ease-in-out w-32 h-12 border-white/20 text-white border-[1px] hover:bg-white hover:text-black rounded-md font-dmSerif text-base p-2"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  );
}

export default MailMe;
