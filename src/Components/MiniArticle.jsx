import React from "react";
import { Link } from "react-router-dom";

function MiniArticle({ id, title, content, image, style, divStyle }) {
  return (
    <>
      <div
        className={` ${style} ${divStyle} min-h-[50vh] mt-6 flex flex-col border-[1px]`}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={` min-h-[32vh] bg-cover flex items-end justify-end `}
        />
        <div className="flex flex-col m-5">
          <p className="text-white font-dmSerif text-2xl">{title}</p>
          <p className="text-white font-lexendDeca font-extralight text-sm">
            {content.slice(0, 60)}...
          </p>
          <Link
            to={`/Post/${id}`}
            className="text-neutral-100 hover:text-cyan-900 transition-all ease-in-out text-sm font-lexendDeca italic flex flex-row mt-5 items-center"
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
                stroke="#e1e1e1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="0.7"
                d="m14 16l4-4m0 0l-4-4m4 4H1"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MiniArticle;
