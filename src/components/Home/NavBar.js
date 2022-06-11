import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const NavBar = () => {
  return (
    <div className="navbar bg-accent fixed  z-20">
      <div className="navbar-start">{/* Dropdown for Mobile */}</div>
      {/* Navbar for large device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <HashLink className="font-bold text-xl" smooth to="/#home">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink className="font-bold text-xl" smooth to="/#projects">
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink className="font-bold text-xl" smooth to="/#about-me">
              About Me
            </HashLink>
          </li>
          <li>
            <HashLink className="font-bold text-xl" to="/#contact" smooth>
              Contact Me
            </HashLink>
          </li>
          <li>
            <HashLink className="font-bold text-xl" to="/blog" smooth>
              Blog
            </HashLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="../../assets/sakibRahman_JrReactDeveloper.pdf"
          target="_blank"
          download
          className="btn hover:btn-info hidden lg:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Resume
        </Link>
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <HashLink className="font-bold text-xl" to="/#home">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink className="font-bold text-xl" smooth to="/#projects">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink className="font-bold text-xl" to="/#contact" smooth>
                About Me
              </HashLink>
            </li>
            <li>
              <HashLink className="font-bold text-xl" to="/#contact" smooth>
                Contact Me
              </HashLink>
            </li>
            <li>
              <HashLink className="font-bold text-xl" to="/blog" smooth>
                Blog
              </HashLink>
            </li>
            <li>
              <Link
                to="../../assets/sakibRahman_JrReactDeveloper.pdf"
                target="_blank"
                download
                className="btn hover:btn-info text-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
