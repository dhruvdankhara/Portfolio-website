// import React from "react";

import Title from "../components/Title";

function About() {
  return (
    <section className="h-dvh md:mt-24 flex flex-col justify-normal ">
      <div className="grid grid-cols-1 mt-10 md:mt-0 gap-10 ">
        <Title title="About" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
          <div className="justify-self-center">
            <img
              className="max-w-80 sm:max-w-96 px-1 md:w-auto bg-cover rounded-3xl"
              src="./src/images/about-img.webp"
              alt=""
            />
            <div className="hidden md:block sm:relative sm:bottom-20 md:left-72">
              <img
                className="bg-white rounded-full absolute w-40 animate-spin"
                src="./src/images/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                alt=""
              />
              <img
                className="absolute w-16 top-10 left-12 "
                src="./src/images/working-emoji.c5325f52b5be329995a5.png"
                alt=""
              />
            </div>
          </div>
          <div className="px-5 text-center md:text-left">
            <h4 className="text-2xl text-white font-bold">
              MERN Stack Developer <br />
              based in Surat, India 📍
            </h4>

            <p className="text-white my-7 text-lg">
              Hey, my name is Dhruv, and I am a MERN Stack Developer. My passion
              is to create and develope Website for my users. <br />
              <br />I am currently learning DSA in Python and also learning
              React Js for web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
