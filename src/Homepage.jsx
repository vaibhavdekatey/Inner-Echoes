import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { featuredArticle, articles } from "./Articles/articles";
import MiniArticle from "./Components/MiniArticle";
import { Link } from "react-router-dom";
import MailMe from "./Components/MailMe";

const res = [...articles].reverse().slice(0, 2);

function Homepage() {
  const [offSet, setOffset] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Sticky header that overlays the image */}

      {/* Hero section with image */}
      <div className="md:mx-[10vw] lg:mx-[26vw] ">
        {/* <div className="flex flex-row items-center justify-center my-14">
          <Link
            to={"/Posts"}
            onMouseOver={() => setOffset(true)}
            onMouseLeave={() => setOffset(false)}
            className="text-black/95 text-5xl italic font-dmSerif flex flex-row hover:underline hover:underline-offset-4 hover:decoration-[1px] transition-all ease-out"
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
                stroke="#242424"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWivdth="1.5"
                d="m14 16l4-4m0 0l-4-4m4 4H1"
              />
            </svg>
          </Link>
        </div> */}

        {/* nvm */}
        <div className="flex flex-col justify-between border-[1px] border-white my-10 mt-28">
          <div
            style={{
              backgroundImage: `url(${featuredArticle.image})`,
            }}
            className={` flex items-start justify-start  bg-cover w-full lg:h-[52dvh] md:h-[42dvh] `}
          >
            <div className="w-fit flex flex-col -translate-y-8 -translate-x-[1px]">
              <p className="text-neutral-100 font-lexendDeca font-extralight text-xl tracking-[0.4em] uppercase w-fit bg-neutral-700 py-3 px-16 border-[1px] border-white border-solid">
                Featured Article
              </p>
            </div>
          </div>
          <div className="whitespace-pre-line  flex flex-row justify-between w-full items-start">
            <div className="mx-6 my-6">
              <p className="text-neutral-100 font-dmSerif font text-5xl mb-2 w-fit">
                {featuredArticle.title}
              </p>
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
                    {featuredArticle.date}
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
                    {featuredArticle.read} Min Read
                  </p>
                </div>
              </div>
              <p
                style={{
                  textShadow: " 1px 2px #000",
                }}
                className="text-neutral-100 font text-base font-lexendDeca font-thin w-fit"
              >
                {featuredArticle.content.slice(0, 200)}...
              </p>
              <Link
                to="/featuredPost"
                className="text-white font-lexendDeca hover:italic hover:text-cyan-400 text-xs tracking-widest font-thin"
              >
                Continue Reading...
              </Link>
            </div>
            <Link
              to="/featuredPost"
              className="group bg-black border-[1px] border-white hover:bg-white ease-in-out transition-all m-6 w-fit h-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="-rotate-45"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                  d="m14 16l4-4m0 0l-4-4m4 4H6"
                  className="transition-colors duration-300 stroke-white group-hover:stroke-black"
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
      <MailMe />
      {/* all posts content */}
      <div className="flex flex-row items-center justify-center my-4">
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

      <div className=" lg:mx-[16vw] mb-[12vh] flex flex-row items-center justify-center">
        <MiniArticle
          title={res[0].title}
          content={res[0].content}
          image={res[0].image}
          id={res[0].id}
          read={res[0].read}
          date={res[0].date}
          style=" "
          divStyle="w-5/12"
        />
        <MiniArticle
          title={res[1].title}
          content={res[1].content}
          image={res[1].image}
          id={res[1].id}
          read={res[1].read}
          date={res[1].date}
          style=" "
          divStyle="ml-6 w-5/12"
        />
      </div>
    </div>
  );
}

export default Homepage;
