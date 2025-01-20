import React from "react";

function MiniArticle(props) {
  console.log(props.title);
  return (
    <>
      <div className={` ${props.style} ${props.divStyle} mt-6 flex flex-col `}>
        <div
          style={{ backgroundImage: `url(${props.image})` }}
          className={`rounded-2xl h-[48vh] bg-cover flex items-end justify-end `}
        >
          <div className="bg-white/80 rounded-full w-fit h-fit bottom-0 m-6 hover:bg-cyan-500 ease-in-out transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="-rotate-45"
            >
              <path
                fill="none"
                stroke="#242424"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="m14 16l4-4m0 0l-4-4m4 4H6"
              />
            </svg>
          </div>
        </div>
        <p className="text-black font-dmSerif text-lg">{props.title}</p>
        <p className="text-black font-lexendDeca font-extralight text-sm">
          {props.content.slice(0, 45)}...
        </p>
      </div>
    </>
  );
}

export default MiniArticle;
