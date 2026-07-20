"use client";

import Link from "next/link";
import { rubikDistressed } from "@/lib/fonts";

declare global {
  interface Window {
    zaraz?: {
      track: (
        eventName: string,
        properties?: Record<string, string | number | boolean>
      ) => Promise<void>;
    };
  }
}

function trackEvent(eventName: string) {
  void window.zaraz?.track(eventName, {
    section: "hero",
  });
}

export default function Hero() {
  return (
    <section
      id="hero"
      role="banner"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-primary to-black px-6 text-center text-white"
    >
      <Link
        href="#main"
        className="sr-only absolute left-4 top-4 z-50 rounded bg-white p-2 text-black focus:not-sr-only"
      >
        Skip to content
      </Link>

      <h1
        className={`${rubikDistressed.className} text-shadow-white mb-6 animate-clip text-6xl tracking-tight motion-reduce:animate-none md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]`}
      >
        Nick Buzzerio
      </h1>

      <div className="animate-fade opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
        <p className="mb-3 max-w-3xl text-lg text-gray-300 sm:text-xl xl:text-2xl 2xl:text-3xl">
          Front-End Engineer building accessible, high-performance web
          experiences with React, Next.js, and TypeScript.
        </p>

        <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base xl:text-lg 2xl:text-xl">
          I build enterprise marketing platforms, scalable component systems,
          and AI-powered applications while pursuing a master&apos;s degree in
          Artificial Intelligence.
        </p>
      </div>

      <div className="animate-jump opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white xl:text-sm">
            5+ Years Professional Experience
          </span>

          <span className="rounded-full bg-green-900 px-4 py-2 text-xs uppercase tracking-wide text-green-300 xl:text-sm">
            Open to Remote Opportunities
          </span>
        </div>

        <ul className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-white/80 xl:text-sm 2xl:text-base">
          {["React", "Next.js", "TypeScript", "Contentful", "AI"].map(
            (technology) => (
              <li
                key={technology}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2"
              >
                {technology}
              </li>
            )
          )}
        </ul>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-base xl:text-lg 2xl:text-xl">
          <a
            href="mailto:nick.buzzerio@gmail.com"
            onClick={() => trackEvent("contact_click")}
            className="rounded-lg bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Get in Touch
          </a>

          <a
            href="https://nb-portfolio-images.s3.amazonaws.com/Nicholas.Buzzerio.Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("resume_click")}
            className="rounded-lg border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/nicholasbuzzerio/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("linkedin_click")}
            className="rounded-lg border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
        </div>

        <Link
          href="#projects"
          onClick={() => trackEvent("projects_click")}
          scroll={false}
          className="mt-5 inline-block text-sm font-semibold text-white/80 underline decoration-white/40 underline-offset-4 transition hover:text-white xl:text-base"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}
