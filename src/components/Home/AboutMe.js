import React from "react";

const AboutMe = () => {
  const tech = [
    "html",
    "css",
    "JavaScript",
    "React js",
    "Tailwind",
    "Bootstrap",
    "Firebase",
    "Axios",
    "React Router",
    "Mongodb",
    "Express js",
    "linux",
  ];

  return (
    <div className="mt-16" id="about-me">
      <div className="relative flex justify-center text-center py-16">
        <h2 className="text-5xl md:text-8xl text-light opacity-10 uppercase font-semibold ">
          About Me
        </h2>
        <p className="text-xl md:text-2xl text-black font-semibold absolute mt-4  w-96 self-center leading-3   mb-0">
          Know Me More
          <span className="w-20  border-emerald-500 mt-4 border-b border-4  block mx-auto"></span>
        </p>
      </div>
      <div className="grid lg:grid-cols-12 gap-y-5 gap-x-5 lg:px-96">
        {/* skills */}
        <div className=" col-span-7 lg:col-span-8 text-center lg:text-left">
          <h2 className="text-3xl font-semibold mb-3">
            I'm <span className="text-secondary">Sakib Rahman,</span> a React
            Developer
          </h2>
          <p>I like making fun, interactive things with code.</p>
          <p>Here is the list of skill I know well.</p>
          <div className=" mt-4 ">
            {tech.map((tech) => (
              <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  border-purple-700 font-medium uppercase text-center text-cyan-600">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* edu */}
        <div className="col-span-5 lg:col-span-4 mt-6 ">
          <div className="lg:pl-4">
            <ul className="ml-3 leading-10">
              <li className=" border-b w-80">
                <span className="font-semibold mr-2">Name:</span>Sakib Rahman
              </li>
              <li className="border-b w-80">
                <span className="font-semibold mr-2">Email:</span>
                <a href="mailto:chat@simone.com">sakib.rahman436@gmail.com</a>
              </li>
              <li className="border-b w-80">
                <span className="font-semibold mr-2">Educational:</span> BSc in
                CSE (runing)
              </li>
              <li className="border-b w-80">
                <span className="font-semibold mr-2">University:</span>{" "}
                Southeast University
              </li>
              <ul className="flex">
                <li className="font-semibold text-cyan-600 hover:text-cyan-800">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/srdo96"
                  >
                    GitHub
                  </a>
                </li>
                <span className="px-2">|</span>
                <li className="font-semibold text-cyan-600 hover:text-cyan-800">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/info-sakib/"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
