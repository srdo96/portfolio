import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
const NavBar = () => {
  return (
    <div className="navbar bg-accent fixed  z-20">
      <div className="navbar-start">{/* Dropdown for Mobile */}</div>
      {/* Navbar for large device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <HashLink smooth to="#home">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink to="/#contact" smooth>
              Contact Me
            </HashLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Get started</a> */}
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
              <HashLink to="#home">Home</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink to="/#contact" smooth>
                Contact Me
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
