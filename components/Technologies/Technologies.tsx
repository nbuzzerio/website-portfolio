import handleClick from "@/public/helper/technologies_handleClick";
import { useEffect, useState } from "react";

import Lottie from "lottie-react";
import * as laptopData from "@/data/laptop_animation.json";

function Technologies({ techs }) {
  const [filteredTechs, setFilteredTechs] = useState(techs);
  const [filter, setFilter] = useState("Choose Category");

  useEffect(() => {
    if (filter === "Choose Category") setFilteredTechs(techs);
    else setFilteredTechs(techs.filter((tech) => tech.category === filter));

    return () => {};
  }, [filter]);

  const handleSelect = function () {
    document.querySelector(".tech-wrapper").classList.add("active");

    setTimeout(
      () => document.querySelector(".tech-wrapper").classList.remove("active"),
      1000
    );
  };

  const techList = filteredTechs.map((tech, index) => {
    const cols = Math.ceil(Math.sqrt(filteredTechs.length));
    const space = cols * 0.3;

    return (
      <div
        className={`tech-card ${tech.name} pointer-events-none absolute m-1 flex aspect-square animate-cornerAppear cursor-pointer flex-col items-start overflow-hidden rounded-3xl bg-primary/50 p-3 transition-transform delay-75 duration-150 hover:scale-125 sm:m-3 lg:flex-row lg:bg-primary/25`}
        key={index}
        onClick={(e) => handleClick(e)}
        style={{
          width: `${100 / (cols + space)}%`,
          transform: `translate(${
            (index % cols) * 100 + //index * tile width
            // add margin space to tile
            ((100 - (100 / (cols + space)) * cols) /
              cols /
              (1 / (cols + space))) *
              (index % cols)
          }%, ${Math.floor(index / cols) * 125}%)`,
        }}
      >
        <div className="img-wrapper pointer-events-none flex h-full w-full flex-col justify-center">
          <img
            src={tech.img}
            alt={`${tech.name} Icon`}
            className={`tech-icon ${tech.name} pointer-events-auto w-full select-none`}
          />
        </div>
        <div className="tech__info-wrapper pointer-events-auto my-[4%] hidden h-full w-full animate-accordion">
          <button className="close absolute top-0 right-10 text-4xl text-white md:text-7xl">
            X
          </button>
          <h3 className="tech__info py-2 text-center text-2xl text-white underline sm:text-5xl">
            {tech.name}
          </h3>
          <p className="tech_info-desc my-5 ml-5 text-sm text-white sm:px-10 sm:text-lg xl:text-2xl 2xl:text-3xl">
            <span className="font-semibold underline">Description</span>:{" "}
            {tech.desc}
          </p>
          <p className="tech_info-desc my-5 ml-5 text-sm text-white sm:px-10 sm:text-lg xl:text-2xl 2xl:text-3xl">
            <span className="font-semibold underline">Experience</span>:{" "}
            {tech.experience}
          </p>
          <p className="tech_info-desc my-5 w-full text-center text-sm text-white sm:px-10 sm:text-lg xl:text-2xl 2xl:text-3xl">
            Check out the{" "}
            <a
              href={tech.docs}
              rel="noreferrer"
              target="_blank"
              className="docs pointer-events-auto text-white underline hover:font-bold"
            >
              documentation
            </a>
          </p>
        </div>
      </div>
    );
  });

  return (
    <section
      id="about"
      className="technologies relative flex w-full max-w-[1920px] flex-col overflow-hidden py-5 sm:py-32 lg:flex-row-reverse"
    >
      <div className="left-panel flex w-full flex-col-reverse items-center sm:px-5 lg:w-4/12 lg:flex-col lg:pt-[10%]">
        <select
          name="techFilter"
          className="techFilter bg-primary/50 lg:bg-primary/25 text-white sm:text-5xl lg:text-xl xl:text-3xl 2xl:text-5xl p-5 rounded-t-3xl z-10"
          value={filter}
          onChange={(e) => {
            handleSelect();
            setTimeout((val) => setFilter(val), 1000, e.target.value);
          }}
        >
          <option value="Choose Category">Choose Category</option>
          <option value="Languages">Languages</option>
          <option value="Client Side">Client Side</option>
          <option value="Server Side">Server Side</option>
          <option value="Database">Database</option>
          <option value="Testing">Testing</option>
          <option value="Deployment">Deployment</option>
          <option value="DevTools/Workflow">DevTools/Workflow</option>
        </select>
        <div className="animation-wrapper overflow-hidden">
          <div className="animation-container w-full">
            <Lottie animationData={laptopData} loop={1} />
          </div>
        </div>
      </div>
      <div className="right-panel flex w-full flex-col items-center justify-center px-2 sm:px-10 lg:w-8/12 lg:px-20 2xl:px-32">
        <h2 className="py-10 text-5xl text-white underline lg:text-7xl">
          Technologies
        </h2>
        <div className="tech-wrapper relative mb-60 flex aspect-square w-full flex-wrap justify-between sm:mb-0 lg:mb-20 xs:mb-20">
          {techList}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
