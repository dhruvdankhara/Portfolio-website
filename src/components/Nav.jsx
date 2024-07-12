// import React from "react";

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="px-1 md:px-2">
      <div className="flex justify-between items-center pt-7 px-4 md:px-20">
        <div className="text-white font-extrabold text-3xl">
          <NavLink to="/">
            Dhruv <span className="text-violet-500">Dankhara</span>
          </NavLink>
        </div>
        <div>
          <ul className="hidden md:flex md:items-center md:justify-center">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `mx-7 hover:text-indigo-400 transition-all ${
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
                // className="mx-7 text-sm text-white font-semibold hover:text-indigo-400 transition-all "
                className={({ isActive }) =>
                  `mx-7 hover:text-indigo-400 transition-all ${
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
                  `mx-7 hover:text-indigo-400 transition-all ${
                    isActive
                      ? "text-lg text-violet-500 font-bold"
                      : "text-sm text-white font-semibold"
                  }`
                }
                to="/skils"
              >
                SKILLS
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `mx-7 hover:text-indigo-400 transition-all ${
                    isActive
                      ? "text-lg text-violet-500 font-bold"
                      : "text-sm text-white font-semibold"
                  }`
                }
                to="/project"
              >
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `mx-7 hover:text-indigo-400 transition-all ${
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
