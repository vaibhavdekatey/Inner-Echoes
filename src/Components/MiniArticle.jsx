import React from "react";
import { Link } from "react-router-dom";

function MiniArticle({
  id,
  title,
  content,
  image,
  style,
  divStyle,
  read,
  date,
}) {
  return (
    <>
      <div
        className={` ${style} ${divStyle} min-h-[55vh] mt-6 flex flex-col border-[1px]`}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={` min-h-[32vh] bg-cover flex items-end justify-end `}
        />
        <div className="flex flex-col m-5">
          <p className="text-white font-dmSerif text-2xl">{title}</p>
          <div className="flex flex-row m-1 my-2">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"
                />
              </svg>
              <p className="text-neutral-400 font-lexendDeca text-sm ml-1">
                {date}
              </p>
            </div>
            <div className="flex flex-row ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"
                />
              </svg>
              <p className="text-neutral-400 font-lexendDeca text-sm ml-1">
                {read} Min Read
              </p>
            </div>
          </div>
          <p className="text-white font-lexendDeca font-extralight text-sm">
            {content.slice(0, 100)}...
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
