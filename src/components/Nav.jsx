// import React from "react";

import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="px-1 md:px-2 w-full ">
      <div className="w-full flex justify-between items-center md:gap-32 pt-7 px-4 md:px-20">
        <div className="text-white font-extrabold text-3xl">
          <Link to="/">
            Dhruv <span className="text-violet-500">Dankhara</span>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex md:items-center md:justify-center md:gap-10">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-all ${
                    isActive
                      ? "text-lg text-violet-500 font-bold"
                      : "text-sm text-white font-semibold"
                  }`
                }
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` hover:text-indigo-400 transition-all ${
                    isActive
                      ? "text-lg text-violet-500 font-bold"
                      : "text-sm text-white font-semibold"
                  }`
                }
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` hover:text-indigo-400 transition-all ${
                    isActive
                      ? "text-lg text-violet-500 font-bold"
                      : "text-sm text-white font-semibold"
                  }`
                }
                to="/skills"
              >
                SKILLS
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-all ${
                    isActive
                      ? "text-lg text-violet-500 font-bold"
                      : "text-sm text-white font-semibold"
                  }`
                }
                to="/project"
              >
                PROJECTS
              </NavLink>
            </li> */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-all ${
                    isActive
                      ? "text-lg text-violet-500 font-bold"
                      : "text-sm text-white font-semibold"
                  }`
                }
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
