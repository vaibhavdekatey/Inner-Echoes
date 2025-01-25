import React, { useState } from "react";
import { articles } from "../Articles/articles";
import { Link } from "react-router-dom";
import MiniArticle from "./MiniArticle";
const res = articles.slice(0, 2);

function Checkthese() {
  const [offSet, setOffset] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center justify-center my-4 ">
        <Link
          to={"/Posts"}
          onMouseOver={() => setOffset(true)}
          onMouseLeave={() => setOffset(false)}
          className="text-white/95 text-5xl italic font-dmSerif flex flex-row hover:underline hover:underline-offset-4 hover:decoration-[1px] transition-all ease-out"
        >
          ALL POSTS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className={`p-2 mx-2 transition-all ease-out ${
              offSet && "translate-x-3"
            }`}
          >
            <path
              fill="none"
              stroke="#e1e1e1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="m14 16l4-4m0 0l-4-4m4 4H1"
            />
          </svg>
        </Link>
      </div>

      <div className="  mb-[12vh] flex flex-row items-center justify-center mx-[20vw]">
        <MiniArticle
          title={res[0].title}
          content={res[0].content}
          image={res[0].image}
          id={res[0].id}
          style=" "
          divStyle="w-5/12"
        />
        <MiniArticle
          title={res[1].title}
          content={res[1].content}
          image={res[1].image}
          id={res[1].id}
          style=" "
          divStyle="ml-6 w-5/12"
        />
      </div>
    </>
  );
}

export default Checkthese;
