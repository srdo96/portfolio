import React from "react";
import alphaTools from "../../assets/projectsImg/alphaTools.png";
import pcWorld from "../../assets/projectsImg/pcWorld.png";
import proTrainer from "../../assets/projectsImg/proTrainer.png";

const Projects = () => {
  return (
    <div className="" id="projects">
      {/* title */}
      <div className="relative flex  justify-center text-center pt-28 py-8 ">
        <h2 className=" text-6xl lg:text-8xl text-light opacity-10  uppercase font-semibold ">
          Projects
        </h2>
        <p className="text-2xl text-black font-semibold absolute mt-4  w-96 self-center leading-3   mb-0">
          My Work
          <span className="w-20  border-emerald-500 mt-4 border-b border-4  block mx-auto"></span>
        </p>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={alphaTools} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Alpha Tools</h2>
            <p>Manufacturer Website</p>
            <div class="card-actions">
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={pcWorld} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">PC World</h2>
            <p>Warehouse Management</p>
            <div class="card-actions">
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={proTrainer} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Pro Trainer</h2>
            <p>Manufacturer Website</p>
            <div class="card-actions">
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;