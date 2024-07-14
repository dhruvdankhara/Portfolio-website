// import React from "react";

function Footer() {
  return (
    <footer id="footer-section">
      <div className="bg-[#20002b] mt-40 py-28 text-white font-bold text-xl text-center">
        <div className=" flex flex-col md:flex-row gap-5 md:justify-evenly items-center">
          <h3 className="">Copyright © 2024. All rights are reserved</h3>
          <div className="flex justify-center gap-5">
            <a className="" href="https://www.linkedin.com/in/dhruv-dankhara/">
              <i className="fa-brands fa-linkedin-in text-3xl hover:scale-110 transition-transform"></i>
            </a>
            <a href="https://github.com/dhruvdankhara">
              <i className="fa-brands fa-github text-3xl hover:scale-110 transition-transform"></i>
            </a>
            <a href="https://twitter.com/dhruvvdankhara">
              <i className="fa-brands fa-x-twitter text-3xl hover:scale-110 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
