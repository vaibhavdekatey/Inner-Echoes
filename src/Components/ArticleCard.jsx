import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ id, author, title, content, date, image }) {
  console.log(author);

  return (
    <>
      <div className="flex flex-row bg-neutral-400/70 w-[56vw] h-[30vh] my-6 rounded-xl">
        <img
          src={`${image}`}
          className="h-[30vh] aspect-[4/3] object-cover rounded-l-xl"
        />
        <div className="flex flex-col justify-between p-6">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#242424"
                  d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"
                />
              </svg>
              <p className="text-black/80 font-lexendDeca text-sm ml-2">
                {date}
              </p>
            </div>

            <p className="text-black font-dmSerif text-3xl mt-4">{title}</p>
            <p className="text-black/80 font-lexendDeca text-base mt-2">
              {content.slice(0, 220)}...
            </p>
          </div>
          <Link
            to={`/Post/${id}`}
            className="text-neutral-800 hover:text-cyan-900 transition-all ease-in-out text-sm font-lexendDeca italic flex flex-row mt-1 items-center"
          >
            Continue Reading
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="ml-2"
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
      </div>
    </>
  );
}

export default ArticleCard;
