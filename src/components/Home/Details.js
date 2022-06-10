import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { data } from "autoprefixer";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/projects.json`).then((data) => {
      setProject(data.data[id - 1]);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="pt-20">
        <p>Loading ...</p>
      </div>
    );
  }

  return (
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
          <p className="text-base text-gray-700 md:text-lg">{project.desc}</p>
        </div>
        <div className="flex items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.live}
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-accent hover:bg-accent-focus focus:shadow-md"
          >
            Visit {project.title}
          </a>
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
  );
};

export default Details;
