import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { articles } from "./Articles/articles";
import MiniArticle from "./Components/MiniArticle";
import MiniMe from "./Components/MiniMe";

function Post() {
  const [offSet, setOffset] = useState(false);

  let navigate = useNavigate();
  const params = useParams();
  const featuredArticle = articles.find(
    (article) => article.id === parseInt(params.id)
  );
  const filtered = articles.filter((fil) => fil.id !== parseInt(params.id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <>
      <div className="flex flex-col items-center mx-[24vw] transition-all ease-in-out">
        <div className="flex flex-row w-full relative justify-center m-5">
          <Link
            onClick={() => navigate(-1)}
            className=" mb-4 bg-white/80 hover:bg-cyan-500 ease-in-out transition-all rounded-full absolute top-0 left-0"
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
          <p className="text-black/95 text-5xl italic font-dmSerif flex flex-row text-center">
            Featured Article
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${featuredArticle.image})`,
          }}
          className={`flex items-end justify-center rounded-2xl bg-cover w-full h-[60dvh]`}
        ></div>
        <div className="whitespace-pre-line mx-6 my-6 flex flex-row justify-between w-full items-end">
          <div className="w-fit flex flex-col">
            <p className="text-black font-dmSerif font italic text-5xl w-fit">
              {featuredArticle.title}
            </p>
            <p className="text-black font-lexendDeca text-xl font-light mt-4 mb-8">
              {featuredArticle.content}
            </p>
          </div>
        </div>
        <MiniMe />
        <div className="border-t-[1px] border-black/30 mt-3 w-full" />
        <div className="w-full ">
          <div className="flex flex-row items-center mt-20 mb-4">
            <Link
              to={"/Posts"}
              onMouseOver={() => setOffset(true)}
              onMouseLeave={() => setOffset(false)}
              href="#"
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
                  strokeWidth="1.5"
                  d="m14 16l4-4m0 0l-4-4m4 4H1"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-row items-start w-full mb-16">
            {filtered.slice(0, 2).map((mini) => (
              <MiniArticle
                key={mini.id}
                id={mini.id}
                title={mini.title}
                content={mini.content}
                image={mini.image}
                style=""
                divStyle="mr-8"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
