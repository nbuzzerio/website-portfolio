import handleClick from "@/public/helper/technologies_handleClick";

function Technologies({ techs }) {
  const techList = techs.map((tech, index) => {
    return (
      <div
        className={`tech-card ${tech.name} pointer-events-none absolute m-3 flex aspect-square w-[20%] cursor-pointer flex-col items-start overflow-hidden rounded-3xl bg-primary/50 p-3 transition-transform delay-75 duration-150 hover:scale-125 lg:flex-row lg:bg-primary/25`}
        key={index}
        onClick={(e) => handleClick(e)}
        style={{
          transform: `translate(${(index % 4) * 125}%, ${
            Math.floor(index / 4) * 125
          }%)`,
        }}
      >
        <div className="img-wrapper pointer-events-none h-full w-full">
          <img
            src={tech.img}
            alt={`${tech.name} Icon`}
            className={`tech-icon ${tech.name} pointer-events-auto w-full`}
          />
        </div>
        <div className="tech__info-wrapper pointer-events-auto hidden w-full h-full animate-accordion my-[4%]">
          <button className="close absolute top-5 right-10 text-7xl text-white">
            X
          </button>
          <h3 className="tech__info text-center text-5xl text-white underline py-2">
            {tech.name}
          </h3>
          <p className="tech_info-desc ml-5 p-10 indent-16 text-base text-white sm:text-lg xl:text-2xl 2xl:text-2xl">
            {tech.desc}
          </p>
          <p className="tech_info-desc ml-5 p-10 w-full text-center text-base text-white sm:text-lg xl:text-2xl 2xl:text-2xl">
            Check out the{" "}
            <a href={tech.docs} rel="noreferrer" target="_blank" className="docs text-white underline hover:font-bold pointer-events-auto">
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
      className="technologies relative flex w-full max-w-[1920px] flex-col py-5 sm:py-32 lg:flex-row-reverse"
    >
      <div className="left-panel flex w-full flex-col items-center justify-start sm:px-5 lg:w-6/12 lg:px-20 2xl:px-32  ">
        <h1 className="py-10 text-5xl text-white underline lg:text-7xl">
          About Me
        </h1>
        <p className="px-[2%] indent-16 text-xl text-white xl:text-2xl 2xl:text-4xl">
          I am a Fullstack developer specialized in Javascript. I love working
          on new projects and finding new technologies to best fit the
          challenge. I am forever expanding my arsenal with new technologies and
          enjoy adapting my applications to roll with the latest and greatest
          new thing...
          <a
            id="resume"
            className="text-primary-lighter"
            target="_blank"
            rel="noreferrer"
            href="https://nb-portfolio-images.s3.amazonaws.com/Nicholas.Buzzerio.Resume.pdf"
          >
            Download Resume
          </a>
        </p>
      </div>
      <div className="right-panel flex w-full flex-col items-center justify-center sm:px-10 lg:w-6/12 lg:px-20 2xl:px-32  ">
        <h2 className="py-10 text-5xl text-white underline lg:text-7xl">
          Technologies
        </h2>
        <div className="tech-wrapper relative flex aspect-[1/3] w-full flex-wrap justify-between">
          {techList}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
