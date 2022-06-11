import React from "react";
import { Link } from "react-router-dom";
import myImg from "../../assets/myImg/sakib-crop.jpeg";

const Header = () => {
  return (
    <div id="home" className="pt-16">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col mb-16 text-center ">
            <a href="/" className="mb-6 mx-auto">
              <div className="flex items-center  justify-center w-28 bg-indigo-50">
                <img className="rounded-full" src={myImg} alt="" />
              </div>
            </a>
            <div className="mx-auto text-center max-w-2xl">
              <h1 className="font-bold">Hi I'm Sakib</h1>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 mx-auto">
                React Developer
              </h2>
            </div>
            <div>
              <Link
                to="../../assets/sakibRahman_JrReactDeveloper.pdf"
                target="_blank"
                download
                className="inline-flex items-center justify-center h-9 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-accent hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
