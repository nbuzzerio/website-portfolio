import Lottie from "lottie-react";
import * as cv_animation from "@/data/cv_animation.json";
import { useEffect, useRef } from "react";

function About() {
  useEffect(() => {
    const aboutCard = document.querySelector(".section-path");

    const selectorsOptions = {
      rootMargin: "0px",
      threshold: 0.05,
    };
    const appearOnScroll = new IntersectionObserver(
      (selectors, appearOnScroll) => {
        selectors.forEach((selector) => {
          if (selector.isIntersecting) {
            selector.target.classList.add("animate-slideIn");
            appearOnScroll.unobserve(selector.target);
          }
          return;
        });
      },
      selectorsOptions
    );

    appearOnScroll.observe(aboutCard);

    lottieRef.current.setSpeed(0.25);
  }, []);

  const handleComplete = () => {
    document.querySelector<HTMLElement>(
      ".animation-container"
    ).style.transform = "translateY(-25%)";
  };

  const lottieRef = useRef(null);

  return (
    <section id="about" className="About relative w-full overflow-hidden">
      <div className="animation-container absolute left-0 top-0 hidden h-full w-full max-w-[1920px] overflow-hidden transition-transform duration-500 md:block max:left-[calc(50vw-960px)]">
        <Lottie
          animationData={cv_animation}
          loop={1}
          onComplete={handleComplete}
          lottieRef={lottieRef}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            transform: "translate(-35%, -32.5%)",
          }}
        />
      </div>
      <div className="section-path relative mx-auto flex h-screen w-full max-w-[1920px] translate-x-1/2 flex-col items-center justify-center bg-primary-dark py-5 sm:py-32 md:h-auto md:flex-row">
        <div className="left-panel flex w-full flex-col items-center justify-center sm:px-10 md:w-6/12 md:px-20 2xl:px-32"></div>
        <div className="right-panel flex w-full flex-col items-center justify-start px-10 sm:px-32 md:w-6/12 md:px-20 2xl:px-32">
          <h2 className="pb-10 text-5xl text-white underline md:text-7xl">
            About Me
          </h2>
          <p className="px-[2%] text-2xl text-white md:text-xl xl:text-2xl 2xl:text-4xl">
            I am a Fullstack developer specialized in Javascript. I love working
            on new projects and finding new technologies to best fit the
            challenge. I am forever expanding my arsenal with new technologies
            and enjoy adapting my applications to roll with the latest and
            greatest new thing
            <a
              id="resume"
              className="block text-white"
              target="_blank"
              rel="noreferrer"
              href="https://nb-portfolio-images.s3.amazonaws.com/Nicholas.Buzzerio.Resume.pdf"
            >
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
