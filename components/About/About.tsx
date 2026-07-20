"use client";

import { useEffect, useRef } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import * as cvAnimation from "@/data/cv_animation.json";

function About() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const aboutCard = document.querySelector(".section-path");

    if (!aboutCard) {
      return;
    }

    const appearOnScroll = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.05,
      }
    );

    appearOnScroll.observe(aboutCard);
    lottieRef.current?.setSpeed(0.25);

    return () => {
      appearOnScroll.disconnect();
    };
  }, []);

  const handleComplete = () => {
    const animationContainer = document.querySelector<HTMLElement>(
      ".animation-container"
    );

    if (animationContainer) {
      animationContainer.style.transform = "translateY(-25%)";
    }
  };

  return (
    <section id="about" className="About relative w-full overflow-hidden">
      <div className="animation-container absolute left-0 top-0 hidden h-full w-full max-w-[1920px] overflow-hidden transition-transform duration-500 md:block max:left-[calc(50vw-960px)]">
        <Lottie
          animationData={cvAnimation}
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
        <div className="left-panel flex w-full flex-col items-center justify-center sm:px-10 md:w-6/12 md:px-20 2xl:px-32" />

        <div className="right-panel flex w-full flex-col items-center justify-start px-10 sm:px-32 md:w-6/12 md:px-20 2xl:px-32">
          <h2 className="pb-10 text-5xl text-white underline md:text-7xl">
            About Me
          </h2>

          <div className="px-[2%] text-2xl text-white md:text-xl xl:text-2xl 2xl:text-4xl">
            <p>
              I&apos;m a Front-End Engineer with more than five years of
              professional experience.
            </p>

            <p className="mt-6">
              I build enterprise web applications and marketing platforms with
              React, Next.js, TypeScript, and Contentful. My work focuses on
              scalable component systems, accessibility, performance, and
              maintainable frontend architecture.
            </p>

            <p className="mt-6">
              I&apos;ve led framework upgrades, improved Lighthouse scores from
              roughly 40 to the 95–100 range, automated large content
              migrations, and supported other developers through documentation
              and mentorship.
            </p>

            <p className="mt-6">
              I&apos;m also pursuing a master&apos;s degree in Artificial
              Intelligence and building projects that combine modern frontend
              development with local AI, developer tooling, and interactive
              learning experiences.
            </p>

            <a
              id="resume"
              className="mt-8 block text-white underline"
              target="_blank"
              rel="noreferrer"
              href="https://nb-portfolio-images.s3.amazonaws.com/Nicholas.Buzzerio.Resume.pdf"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
