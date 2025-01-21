import React from "react";
import Header from "./Components/Header";
import { featuredArticle, articles } from "./Articles/articles";
import MiniArticle from "./Components/MiniArticle";
import { Link } from "react-router-dom";

const res = articles.slice(0, 2);

function Homepage() {
  return (
    <div className="relative px-4">
      {/* Sticky header that overlays the image */}

      {/* Hero section with image */}
      <div className=" mx-[16vw] ">
        <div className="flex flex-row items-center justify-center my-14">
          <a
            href="#"
            className="text-black/95 text-5xl italic font-dmSerif flex flex-row "
          >
            ALL POSTS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="p-2 hover:translate-x-1"
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
          </a>
        </div>
        {/* nvm */}
        <div
          style={{
            backgroundImage: `url(${featuredArticle.image})`,
          }}
          className={` flex items-end justify-center rounded-2xl bg-cover w-full h-[60dvh] `}
        >
          <div className="whitespace-pre-line mx-6 my-6 flex flex-row justify-between w-full items-end">
            <div className="w-fit flex flex-col">
              <p className="text-neutral-800/80 font-lexendDeca font-light text-sm w-fit bg-white/80 py-1 px-3 rounded-2xl border-[1px] border-white/70 border-solid">
                Featured Article
              </p>
              <p className="text-neutral-100 font-dmSerif font italic text-5xl w-fit">
                {featuredArticle.title}
              </p>
              <p
                style={{
                  textShadow: " 1px 2px #000",
                }}
                className="text-neutral-100 font text-sm font-lexendDeca font-thin w-fit"
              >
                {featuredArticle.content.slice(0, 60)}...
              </p>
            </div>
            <Link
              to="/featuredPost"
              className="bg-white/80 hover:bg-cyan-500 ease-in-out transition-all rounded-full w-fit h-fit "
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
        </div>
        {/* You can add more content here */}
        {/* <p className="text-neutral-500 whitespace-pre-line">
          {featuredArticle.content}
        </p> */}
      </div>
      {/* all posts content */}
      <div className=" mx-[16vw] flex flex-row items-start ">
        <MiniArticle
          title={res[0].title}
          content={res[0].content}
          image={res[0].image}
          style=" "
          divStyle="w-7/12"
        />
        <MiniArticle
          title={res[1].title}
          content={res[1].content}
          image={res[1].image}
          style=" "
          divStyle="ml-6 w-6/12"
        />
      </div>
    </div>
  );
}

export default Homepage;
