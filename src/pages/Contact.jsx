// import React from "react";

import Title from "../components/Title";

function Contact() {
  return (
    <section className="h-dvh mt-16 md:mt-24">
      <div className="flex gap-10 flex-col justify-center items-center">
        <Title title="Contact" />
        <div className="flex flex-col items-center md:self-start md:pl-60 md:pr-40">
          <div className="flex justify-center items-center md:self-start ">
            <h3 className="text-white text-2xl md:text-3xl text-center md:self-start font-bold">
              Do not be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="flex flex-col md:flex-row md:self-start justify-center items-center gap-10 mt-10 ">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <img className="text-white" src="./src/images/email.svg" alt="" />
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
                <h3 className="text-white font-bold text-xl">Location</h3>
                <p className="text-slate-400 text-base">Gujarat, india</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <img src="./src/images/location.svg" alt="" />
              <div className="flex flex-col justify-center items-center md:items-start gap-2">
                <h3 className="text-white font-bold text-xl">Mail</h3>
                <a
                  className="text-slate-400 text-base"
                  href="mailto:dhruvdankhara09@gmail.com"
                >
                  dhruvdankhara09@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
