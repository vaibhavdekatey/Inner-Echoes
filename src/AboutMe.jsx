import React from "react";
import sky from "./assets/sky.jpg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center mx-[24vw] transition-all ease-in-out">
        <Link
          to="/"
          className=" mb-4 bg-white/80 hover:bg-cyan-500 ease-in-out transition-all rounded-full self-start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="rotate-180"
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
        <div
          className="rounded-2xl w-full h-[60vh] bg-cover"
          style={{ backgroundImage: `url(${sky})` }}
        />
        <p className="text-black/95 text-5xl italic font-dmSerif self-start my-6">
          About Me
        </p>
        <p className="text-black font-lexendDeca text-xl font-light">
          Hello! I'm Vaibhav Dekatey, the author of this blog. I am passionate
          about Anime, Art, Video Games, Music, Coffee and much more. This blog
          is a space where I share my thoughts, experiences, and knowledge on
          various topics that interest me. I hope you find the content here
          informative and engaging.
        </p>
        <p className="text-black font-lexendDeca text-xl font-light mt-3">
          I started this blog as a way to document my journey and share my
          insights with a wider audience. Whether it's about Anime, Video Games,
          or Coffee, I strive to provide valuable and interesting content. When
          I'm not blogging, you can find me doing some sort of art.
        </p>
        <p className="text-black font-lexendDeca text-xl font-light mt-3">
          Feel free to reach out to me through the contact form if you have any
          questions, suggestions, or just want to connect. Thank you for
          visiting my blog, and I hope you enjoy reading it as much as I enjoy
          writing it!
        </p>
      </div>
    </>
  );
}

export default AboutMe;
