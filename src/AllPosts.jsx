import React, { useEffect } from "react";
import { articles, author } from "./Articles/articles";
import { Link, useNavigate } from "react-router-dom";
import ArticleCard from "./Components/ArticleCard";

function AllPosts() {
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative flex flex-col mx-[22vw]">
        <div className="flex flex-row w-full justify-center">
          <Link
            onClick={() => navigate(-1)}
            className=" mb-4 bg-white/80 hover:bg-cyan-500 ease-in-out transition-all rounded-full w-fit h-fit flex justify-center items-center absolute top-0 left-0"
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
          <p className="text-black/95 text-5xl italic font-dmSerif transition-all ease-out">
            ALL POSTS
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              author={author.name}
              title={article.title}
              content={article.content}
              image={article.image}
              date={article.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllPosts;
