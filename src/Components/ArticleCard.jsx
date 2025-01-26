import React, { useState } from "react";
import { Link } from "react-router-dom";

function ArticleCard({ id, author, title, content, date, image, read }) {
  const [offSet, setOffset] = useState(false);
  console.log(read);

  return (
    <>
      <div className="flex flex-row bg-neutral-900 w-[52vw] h-[38vh] my-6 border-[1px] border-white">
        <img
          src={`${image}`}
          className="h-[38vh] aspect-[4/3] object-cover pb-[2px]"
        />
        <div className="flex flex-col justify-between p-6">
          <div className="flex flex-col">
            {/* <div className="flex flex-row">
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
            </div> */}

            <p className="text-white font-dmSerif text-4xl my-2 ">{title}</p>
            <div className="flex flex-row">
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
            <p className="text-white/90 font-lexendDeca text-base font-light mt-2">
              {content.slice(0, 240)}...
            </p>
          </div>
          <Link
            to={`/Post/${id}`}
            onMouseOver={() => setOffset(true)}
            onMouseLeave={() => setOffset(false)}
            className={`text-neutral-300 w-fit hover:text-cyan-500 transition-all ease-in-out text-sm font-lexendDeca italic font-extralight flex flex-row mt-1 items-center`}
          >
            Continue Reading
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className={`ml-1 transition-all ease-in ${
                offSet && "translate-x-2"
              }`}
            >
              <path
                fill="none"
                stroke="#e1e1e1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="0.7"
                d="m14 16l4-4m0 0l-4-4m4 4H2"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ArticleCard;
