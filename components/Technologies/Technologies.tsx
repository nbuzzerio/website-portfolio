const data = [
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/JavaScriptIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "JavaScript",
    docs: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/ReactIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "React",
    docs: "https://reactjs.org/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/ReduxIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "Redux",
    docs: "https://redux.js.org/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/HTMLIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "HTML",
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/CSSIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "CSS",
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/NodeJSIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "NodeJS",
    docs: "https://nodejs.org/en/docs/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/ExpressIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "Express",
    docs: "https://expressjs.com/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/SocketIoIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "SocketIo",
    docs: "https://socket.io/docs/v3/index.html",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/PostgressIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "Postgress",
    docs: "https://www.postgresql.org/docs/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/MongoDBIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "MongoDB",
    docs: "https://docs.mongodb.com/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/MongooseIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "Mongoose",
    docs: "https://mongoosejs.com/docs/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/MySQLIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "MySQL",
    docs: "https://dev.mysql.com/doc/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/SequelizeIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "Sequelize",
    docs: "https://sequelize.org/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/GitIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "Git",
    docs: "https://git-scm.com/doc",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/WebpackIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "Webpack",
    docs: "https://webpack.js.org/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/AWSIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "AWS",
    docs: "https://docs.aws.amazon.com/index.html",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/JestIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "Jest",
    docs: "https://jestjs.io/docs/getting-started",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/EnzymeIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "Enzyme",
    docs: "https://enzymejs.github.io/enzyme/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/Nginx.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "NGinX",
    docs: "https://nginx.org/en/docs/",
  },
  {
    img: "https://nb-portfolio-images.s3.amazonaws.com/JWTIcon.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illum similique laborum, quo provident. Fugiat non doloribus ducimus aspernatur minus aperiam esse alias soluta consequatur impedit cum neque, autem, maiores molestias distinctio debitis possimus rerum quaerat iusto velit sit enim. Repudiandae omnis voluptates alias, illo optio esse magnam deserunt.",
    name: "JWT",
    docs: "https://www.npmjs.com/package/jsonwebtoken",
  },
];

function Technologies() {
  const techs = data.map((tech, index) => {
    return (
      <div
        className={`tech-card ${tech.name} m-3 flex w-2/12 cursor-pointer flex-col items-start overflow-hidden rounded-3xl bg-primary/50 transition-transform delay-75 duration-150 hover:scale-105 hover:animate-bounce lg:flex-row lg:bg-primary/25`}
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
        <div className="tech__info-wrapper pointer-events-none hidden max-h-[600px] w-full animate-accordion">
          <button className="close absolute top-5 right-10 text-7xl text-white">
            X
          </button>
          <h3 className="tech__info text-center text-5xl text-white underline">
            {tech.name}
          </h3>
          <p className="tech_info-desc indent-16 py-10 text-base sm:text-2xl text-white xl:text-2xl 2xl:text-4xl">{tech.desc}</p>
        </div>
      </div>
    );
  });

  const handleClick = function (e: any) {
    let card = e.target;
    let cardClasses = Array.prototype.slice.call(card.classList);
    console.log(card);

    if (cardClasses.includes("tech-card")) {
      card = card.querySelector(".tech-icon");
      cardClasses = Array.prototype.slice.call(card.classList);
    }

    if (cardClasses.includes("animate-expand")) {
      card.classList.add("animate-contract");
      card.classList.remove("animate-expand");
      card.classList.remove("lg:p-20");
      card.classList.remove("sm:px-48");
      card.classList.remove("px-10");
      card.classList.remove("py-10");
      card.parentElement.parentElement.classList.remove("absolute");
      card.parentElement.parentElement.classList.remove("sm:w-[88%]");
      card.parentElement.parentElement.classList.remove("w-[95%]");
      card.parentElement.parentElement.classList.add("w-2/12");
      card.parentElement.parentElement.classList.remove("p-10");
      card.parentElement.parentElement.classList.remove("z-10");
      card.parentElement.parentElement.classList.remove("scale-105");
      card.parentElement.parentElement.classList.add("hover:scale-105");
      card.parentElement.parentElement.classList.add("hover:animate-bounce");
      card.parentElement.parentElement
        .querySelector(".tech__info-wrapper")
        .classList.add("hidden");
    } else if (cardClasses.includes("tech-icon")) {
      card.classList.remove("animate-contract");
      card.classList.add("animate-expand");
      card.classList.add("lg:p-20");
      card.classList.add("sm:px-48");
      card.classList.add("px-10");
      card.classList.add("py-10");
      card.parentElement.parentElement.classList.add("absolute");
      card.parentElement.parentElement.classList.add("sm:w-[88%]");
      card.parentElement.parentElement.classList.add("w-[95%]");
      card.parentElement.parentElement.classList.remove("w-2/12");
      card.parentElement.parentElement.classList.add("p-10");
      card.parentElement.parentElement.classList.add("z-10");
      card.parentElement.parentElement.classList.add("scale-105");
      card.parentElement.parentElement.classList.remove("hover:scale-105");
      card.parentElement.parentElement.classList.remove("hover:animate-bounce");
      card.parentElement.parentElement
        .querySelector(".tech__info-wrapper")
        .classList.remove("hidden");
    } else if (cardClasses.includes("img-wrapper")) {
      const cardIcon = card.querySelector(".tech-icon");
      cardIcon.classList.add("animate-contract");
      cardIcon.classList.remove("animate-expand");
      card.classList.remove("lg:p-20");
      card.classList.remove("sm:px-48");
      card.classList.remove("px-10");
      card.classList.remove("py-10");
      cardIcon.parentElement.parentElement.classList.remove("absolute");
      cardIcon.parentElement.parentElement.classList.remove("sm:w-[88%]");
      cardIcon.parentElement.parentElement.classList.remove("w-[95%]");
      cardIcon.parentElement.parentElement.classList.add("w-2/12");
      cardIcon.parentElement.parentElement.classList.remove("p-10");
      cardIcon.parentElement.parentElement.classList.remove("z-10");
      cardIcon.parentElement.parentElement.classList.remove("scale-105");
      card.parentElement.classList.add("hover:scale-105");
      card.parentElement.classList.add("hover:animate-bounce");
    }
  };

  return (
    <section id="about" className="technologies relative flex w-full max-w-[1920px] flex-col py-5 sm:py-32 lg:flex-row-reverse">
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
        <div className="tech-wrapper flex flex-wrap justify-between">
          {techs}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
