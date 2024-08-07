// import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="h-dvh flex flex-col justify-center">
      <div className="grid gap-10 md:gap-0 m-10 md:grid-cols-2 grid-cols-1">
        <div className="flex items-start justify-center md:p-20">
          <div className="flex flex-col items-start justify-center">
            <div>
              <p className="text-violet-500 font-extrabold text-2xl">
                👋🏻 Hey, I’m Dhruv Dankhara
              </p>
            </div>
            <div>
              <p className="my-7 text-3xl text-white md:text-4xl lg:text-5xl leading-normal font-bold">
                MERN Stack Developer
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <Link to="/skills">
                    <button className="rounded-full text-white bg-violet-800 hover:bg-violet-600 transition-all px-5 py-2 font-bold">
                      Tech Stack
                    </button>
                  </Link>
                </div>
                <div>
                  <p>
                    <a href="#" className="text-white">
                      Download CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-start">
          <div>
            <img
              className="max-w-60 sm:max-w-sm md:max-w-sm rounded-full shadow-[0_0px_100px_10px_rgba(201,96,201,0.5)]"
              src="./src/images/profile.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="text-whit flex justify-between items-center gap-10">
              <a
                className="text-white"
                href="https://www.linkedin.com/in/dhruv-dankhara/"
              >
                <FaLinkedin className="text-3xl hover:scale-125 transition-transform duration-100 ease-in-out" />
              </a>
              <a className="text-white" href="https://github.com/dhruvdankhara">
                <FaGithub className="text-3xl hover:scale-125 transition-transform duration-100 ease-in-out" />
              </a>
              <a
                className="text-white"
                href="https://twitter.com/dhruvvdankhara"
              >
                <FaXTwitter className="text-3xl hover:scale-125 transition-transform duration-100 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
