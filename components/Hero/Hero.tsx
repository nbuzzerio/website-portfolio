"use client";

import { rubikDistressed } from "@/lib/fonts";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      role="banner"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-primary to-black px-6 text-center text-white"
    >
      {/* Skip to Content (accessibility) */}
      <Link
        href="#main"
        className="sr-only absolute top-4 left-4 z-50 rounded bg-white p-2 text-black focus:not-sr-only"
      >
        Skip to content
      </Link>

      {/* Headline */}
      <h1
        className={`${rubikDistressed.className} text-shadow-white mb-6 text-6xl tracking-tight md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]`}
      >
        Nick Buzzerio
      </h1>

      {/* Subheadline */}
      <p className="mb-3 max-w-3xl text-lg text-gray-300 sm:text-xl xl:text-2xl 2xl:text-3xl">
        Frontend Engineer | Next.js, TypeScript, Tailwind | Performance &
        Accessibility Focus
      </p>

      {/* Personal Tagline */}
      <p className="mt-1 max-w-2xl text-sm text-gray-400 sm:text-base xl:text-lg 2xl:text-xl">
        Based in NJ. I turn slow sites into snappy experiences and mentor devs
        along the way.
      </p>

      {/* Open to Work Badge */}
      <span className="mt-6 inline-block rounded-full bg-green-900 px-4 py-2 text-xs uppercase tracking-wide text-green-300 xl:text-sm">
        Open to Remote Frontend Roles
      </span>

      {/* Tech Stack Chips */}
      <ul className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-white/80 xl:text-sm 2xl:text-base">
        {["React", "Next.js", "TypeScript", "Tailwind CSS", "Contentful"].map(
          (tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2"
            >
              {tech}
            </li>
          )
        )}
      </ul>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-base xl:text-lg 2xl:text-xl">
        <Link
          href="#projects"
          scroll={false}
          className="rounded-lg bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
        >
          View My Work
        </Link>
        <a
          href="mailto:nick.buzzerio@gmail.com"
          className="rounded-lg border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
