const data = [
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/JavaScriptIcon.png",
    name: "JavaScript",
    docs: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/ReactIcon.png",
    name: "React",
    docs: "https://reactjs.org/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/ReduxIcon.png",
    name: "Redux",
    docs: "https://redux.js.org/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/HTMLIcon.png",
    name: "HTML",
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/CSSIcon.png",
    name: "CSS",
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/NodeJSIcon.png",
    name: "NodeJS",
    docs: "https://nodejs.org/en/docs/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/ExpressIcon.png",
    name: "Express",
    docs: "https://expressjs.com/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/SocketIoIcon.png",
    name: "SocketIo",
    docs: "https://socket.io/docs/v3/index.html",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/PostgressIcon.png",
    name: "Postgress",
    docs: "https://www.postgresql.org/docs/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/MongoDBIcon.png",
    name: "MongoDB",
    docs: "https://docs.mongodb.com/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/MongooseIcon.png",
    name: "Mongoose",
    docs: "https://mongoosejs.com/docs/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/MySQLIcon.png",
    name: "MySQL",
    docs: "https://dev.mysql.com/doc/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/SequelizeIcon.png",
    name: "Sequelize",
    docs: "https://sequelize.org/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/GitIcon.png",
    tech: "Git",
    docs: "https://git-scm.com/doc",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/WebpackIcon.png",
    tech: "Webpack",
    docs: "https://webpack.js.org/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/AWSIcon.png",
    tech: "AWS",
    docs: "https://docs.aws.amazon.com/index.html",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/JestIcon.png",
    tech: "Jest",
    docs: "https://jestjs.io/docs/getting-started",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/EnzymeIcon.png",
    tech: "Enzyme",
    docs: "https://enzymejs.github.io/enzyme/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/Nginx.png",
    tech: "N",
    docs: "https://nginx.org/en/docs/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/JWTIcon.png",
    tech: "JWT",
    docs: "https://www.npmjs.com/package/jsonwebtoken",
  },
];

function Technologies() {
  const techs = data.map((tech, index) => {
    return (
      <div
        className={`tech-card ${tech.name} m-3 flex w-2/12 items-center overflow-hidden rounded-3xl bg-primary/25 transition-transform delay-75 duration-150 hover:scale-105`}
        key={index}
        onClick={(e) => handleClick(e)}
      >
        <div className="img-wrapper w-full">
          <img
            src={tech.img}
            alt={`${tech.name} Icon`}
            className={`tech-icon ${tech.name} w-full`}
          />
        </div>
        <div className="tech__info-wrapper relative hidden h-full w-6/12">
          <button className="close absolute top-0 right-0 cursor-pointer text-7xl text-white">
            X
          </button>
        </div>
      </div>
    );
  });

  const handleClick = function (e: any) {
    const card = e.target;
    const cardClasses = Array.prototype.slice.call(card.classList);
    console.log(card);

    if (cardClasses.includes("animate-expand")) {
      card.classList.add("animate-contract");
      card.classList.remove("animate-expand");
      card.parentElement.parentElement.classList.remove("absolute");
      card.parentElement.parentElement.classList.remove("w-10/12");
      card.parentElement.parentElement.classList.add("w-2/12");
      card.parentElement.parentElement.classList.remove("p-10");
      card.parentElement.parentElement.classList.remove("z-10");
      card.parentElement.parentElement.classList.remove("scale-105");
      card.parentElement.parentElement.classList.add("hover:scale-105");
      card.parentElement.parentElement
        .querySelector(".tech__info-wrapper")
        .classList.add("hidden");
    } else if (cardClasses.includes("tech-icon")) {
      card.classList.remove("animate-contract");
      card.classList.add("animate-expand");
      card.parentElement.parentElement.classList.add("absolute");
      card.parentElement.parentElement.classList.add("w-10/12");
      card.parentElement.parentElement.classList.remove("w-2/12");
      card.parentElement.parentElement.classList.add("p-10");
      card.parentElement.parentElement.classList.add("z-10");
      card.parentElement.parentElement.classList.add("scale-105");
      card.parentElement.parentElement.classList.remove("hover:scale-105");
      card.parentElement.parentElement
        .querySelector(".tech__info-wrapper")
        .classList.remove("hidden");
    } else if (cardClasses.includes("img-wrapper")) {
      const cardIcon = card.querySelector(".tech-icon");
      cardIcon.classList.add("animate-contract");
      cardIcon.classList.remove("animate-expand");
      cardIcon.parentElement.parentElement.classList.remove("absolute");
      cardIcon.parentElement.parentElement.classList.remove("w-10/12");
      cardIcon.parentElement.parentElement.classList.add("w-2/12");
      cardIcon.parentElement.parentElement.classList.remove("p-10");
      cardIcon.parentElement.parentElement.classList.remove("z-10");
      cardIcon.parentElement.parentElement.classList.remove("scale-105");
      card.parentElement.classList.add("hover:scale-105");
    }
  };

  return (
    <section className="technologies relative flex w-full max-w-[1920px] flex-row-reverse py-32">
      <div className="left-panel flex w-6/12 flex-col items-center justify-start px-32 ">
        <h1 className="py-10 text-7xl text-white underline">About Me</h1>
        <p className="text-3xl text-white">
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
      <div className="right-panel flex w-6/12 flex-col items-center justify-center px-32 ">
        <h2 className="py-10 text-7xl text-white underline">Technologies</h2>
        <div className="tech-wrapper flex flex-wrap justify-between">
          {techs}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
