import React from "react";
import banner from "../img/banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-5 mb-16">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              “Once you learn to read, you will be
              <span className="text-pink-500"> forever free</span>.” – Frederick
              Douglas
            </h1>
            <div className="text-xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              ipsam molestiae dolore est rerum vitae quasi magni, tenetur iusto
              possimus quas aspernatur. Quia temporibus doloremque cumque vero
              est? Dolore non nostrum necessitatibus architecto, nisi nihil
              cupiditate? Exercitationem sapiente cumque deserunt molestias
              maxime quaerat commodi harum officia ullam. Eos voluptatem
              deserunt culpa debitis.Ad placeat explicabo consectetur adipisci
              nobis, consequatur eum laudantium, nisi, tempore quasi maxime vel?
            </div>
          </div>
          <label className="input bg-white border-solid border-black border-2 dark:border-white input-bordered flex items-center gap-2 mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 dark:bg-black"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow bg-inherit"
              placeholder="Email"
            />
          </label>
          <button className="btn btn-secondary mt-5">Secondary</button>
        </div>
        <div className="w-full md:w-1/2  mt-12 order-1 md:order-2 md:mt-32 items-center justify-center flex">
          <img src={banner} className="w-92 " alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
