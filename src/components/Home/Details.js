import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios.get(`http://localhost:3000/projects.json`).then((data) => {
    axios.get(`https://portfolio-5fd0e.web.app/projects.json`).then((data) => {
      setProject(data.data[id - 1]);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="pt-32">
        <Loading />
      </div>
    );
  }
  project.link.map((link) => console.log("link", Object.keys(link)));

  return (
    <div>
      <div className=" flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-accent">
                {project.type}
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {project.title}
            </h2>
            {
              project.func.map((f) => (
                <p>- {f}</p>
              ))
              // <p className="text-base text-gray-700 md:text-lg">{project.desc}</p>
            }
          </div>
          <div className="flex">
            {project.link.map((link) => (
              <div className="flex items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={Object.values(link)}
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 py-7 md:py-0 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-accent hover:bg-accent-focus focus:shadow-md"
                >
                  {Object.keys(link)}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src={project.img[0]}
            className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-4xl text-center mt-14">Used Technologies</h1>
      <div className="mt-6 mx-10 md:flex md:justify-center">
        {project.tech.map((tech) => (
          <div className=" inline-block m-2  px-3 border-cyan-600 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
            {tech}
          </div>
        ))}
      </div>
      <h3 className="text-center text-4xl mt-8">Project Showcase</h3>
      <div className=" my-9 flex flex-col items-center gap-8">
        <div className="w-2/3">
          <img src={project.img[1]} className="w-full h-full mx-auto" alt="" />
        </div>
        <div className="w-2/3">
          <img src={project.img[2]} className="w-full h-full mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
