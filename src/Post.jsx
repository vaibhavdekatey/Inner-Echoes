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
        <div className="flex flex-row w-full relative m-5">
          <Link
            onClick={() => navigate(-1)}
            className=" my-2 bg-black hover:bg-white ease-in-out transition-all border-[1px] group border-white w-fit h-fit flex justify-center self-start "
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
          {/* <p className="text-white text-5xl italic font-dmSerif flex flex-row text-center">
            Featured Article
          </p> */}
        </div>
        <div className="border-white border-[1px] mb-8">
          <div
            style={{
              backgroundImage: `url(${featuredArticle.image})`,
            }}
            className={`flex items-end justify-center bg-cover w-full h-[60dvh]`}
          ></div>
          <div className="whitespace-pre-line px-6 my-6 flex flex-row justify-between w-full items-end">
            <div className="w-fit flex flex-col">
              <p className="text-white font-dmSerif font italic text-5xl w-fit">
                {featuredArticle.title}
              </p>
              <div className="flex flex-row  my-2">
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
              <p className="text-white font-lexendDeca text-xl font-light mt-4 mb-8 ">
                {featuredArticle.content}
              </p>
            </div>
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
              className="text-white text-5xl italic font-dmSerif flex flex-row hover:underline hover:underline-offset-4 hover:decoration-[1px] transition-all ease-out"
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
