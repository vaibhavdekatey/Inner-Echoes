import React from "react";

function MailMe() {
  return (
    <>
      <div className=" my-[12vh] flex flex-row mx-[17vw] h-[16vh] rounded-2xl justify-between px-[10vw] items-center bg-neutral-400/60 border-solid border-[1px] border-neutral-900 ">
        <p className="text-black font-dmSerif text-3xl">
          Never Miss a New Post
        </p>
        <div className="flex flex-row">
          <form>
            <input
              type="text"
              className="bg-transparent border-b-[1px] border-black h-[4vh] mx-4"
            />
            <input
              type="submit"
              className="bg-none w-32 h-10 border-black border-[1px] rounded-md font-dmSerif text-base p-2"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default MailMe;
