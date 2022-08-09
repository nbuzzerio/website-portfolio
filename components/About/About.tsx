function About() {
  return (
    <section
      id="about"
      className="About relative flex w-full max-w-[1920px] flex-col py-5 sm:py-32 lg:flex-row-reverse bg-primary-dark"
    >
      <div className="left-panel flex w-full flex-col items-center justify-start px-10 sm:px-32 lg:w-6/12 lg:px-20  2xl:px-32">
        <h1 className="py-10 text-5xl text-black underline lg:text-7xl">
          About Me
        </h1>
        <p className="px-[2%] indent-16 text-xl text-black xl:text-2xl 2xl:text-4xl">
          I am a Fullstack developer specialized in Javascript. I love working
          on new projects and finding new About to best fit the challenge. I am
          forever expanding my arsenal with new About and enjoy adapting my
          applications to roll with the latest and greatest new thing...
          <a
            id="resume"
            className="text-white"
            target="_blank"
            rel="noreferrer"
            href="https://nb-portfolio-images.s3.amazonaws.com/Nicholas.Buzzerio.Resume.pdf"
          >
            Download Resume
          </a>
        </p>
      </div>
      <div className="right-panel flex w-full flex-col items-center justify-center sm:px-10 lg:w-6/12 lg:px-20 2xl:px-32  "></div>
    </section>
  );
}

export default About;
