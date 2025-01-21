import React from "react";
import { Link } from "react-router-dom";

function MiniArticle({ id, title, content, image, style, divStyle }) {
  return (
    <>
      <div className={` ${style} ${divStyle} mt-6 flex flex-col `}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={`rounded-2xl h-[48vh] bg-cover flex items-end justify-end `}
        >
          <Link
            to={`/Post/${id}`}
            className="bg-white/80 rounded-full w-fit h-fit hover:p-2 bottom-0 m-6 hover:bg-cyan-500 ease-in-out transition-all"
          >
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
          </Link>
        </div>
        <p className="text-black font-dmSerif text-xl">{title}</p>
        <p className="text-black font-lexendDeca font-extralight text-sm">
          {content.slice(0, 60)}...
        </p>
        <Link
          to={`/Post/${id}`}
          className="text-neutral-800  hover:text-cyan-900 transition-all ease-in-out text-sm font-lexendDeca italic flex flex-row mt-1 items-center"
        >
          Continue Reading
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="ml-2 "
          >
            <path
              fill="none"
              stroke="#1e1e1e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="0.7"
              d="m14 16l4-4m0 0l-4-4m4 4H1"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default MiniArticle;
