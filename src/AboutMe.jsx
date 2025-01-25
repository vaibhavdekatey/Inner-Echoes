import React, { useEffect, useState } from "react";
import sky from "./assets/sky.jpg";
import { Link, useNavigate } from "react-router-dom";
import MiniArticle from "./Components/MiniArticle";
import { articles } from "./Articles/articles";
import MailMe from "./Components/MailMe";

const res = articles.slice(0, 2);

function AboutMe() {
  const [offSet, setOffset] = useState(false);

  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center mx-[24vw] my-[4vh] transition-all ease-in-out">
        <Link
          onClick={() => navigate(-1)}
          className=" mb-8 bg-black hover:bg-white ease-in-out transition-all border-[1px] group border-white w-fit h-fit flex justify-center self-start "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="rotate-180 transition-colors duration-300 stroke-white group-hover:stroke-black"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="m14 16l4-4m0 0l-4-4m4 4H6"
              className="transition-colors duration-300 stroke-white group-hover:stroke-black"
            />
          </svg>
        </Link>
        <div
          className="w-full h-[60vh] bg-cover"
          style={{ backgroundImage: `url(${sky})` }}
        />
        <p className="text-white/95 text-5xl italic font-dmSerif self-start my-6">
          About Me
        </p>
        <p className="text-white font-lexendDeca text-xl font-light">
          Hello! I'm Vaibhav Dekatey, the author of this blog. I am passionate
          about Anime, Art, Video Games, Music, Coffee and much more. This blog
          is a space where I share my thoughts, experiences, and knowledge on
          various topics that interest me. I hope you find the content here
          informative and engaging.
        </p>
        <p className="text-white font-lexendDeca text-xl font-light mt-3">
          I started this blog as a way to document my journey and share my
          insights with a wider audience. Whether it's about Anime, Video Games,
          or Coffee, I strive to provide valuable and interesting content. When
          I'm not blogging, you can find me doing some sort of art.
        </p>
        <p className="text-white font-lexendDeca text-xl font-light mt-3">
          Feel free to reach out to me through the contact form if you have any
          questions, suggestions, or just want to connect. Thank you for
          visiting my blog, and I hope you enjoy reading it as much as I enjoy
          writing it!
        </p>

        {/* <div className="flex flex-row items-center justify-center my-4">
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

        <div className="  mb-[12vh] flex flex-row items-center justify-center">
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
        </div> */}
      </div>
    </>
  );
}

export default AboutMe;
