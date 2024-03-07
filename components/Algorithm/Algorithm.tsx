import React from "react";
import { Algo } from "@/pages/algorithms";
import CodeBlock from "../CodeBlock";

const Algorithm = ({ title, prompt, soln, bigO }: Algo) => {
  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  }

  return (
    <article className="mx-auto w-full max-w-7xl p-20">
      <h2 className="text-6xl text-slate-200">{title}:</h2>
      <p className="py-10 indent-16 text-xl leading-8 text-gray-400">
        {prompt}
      </p>
      <div className="relative w-full rounded-md border border-dashed p-10">
        <div className="absolute top-0 left-0 flex w-full justify-between">
          Copy solution code
          <button
            className="flex items-center justify-center rounded-bl-md bg-white/30 px-5 py-2 capitalize hover:bg-white/80 active:scale-105"
            onClick={() => copyToClipboard(soln)}
          >
            copy code
          </button>
        </div>
        <pre>
          <CodeBlock soln={soln} />
        </pre>
      </div>

      <h2 className="pt-20 text-6xl text-slate-200">Big O:</h2>
      <div className="p-10 text-xl leading-8 text-gray-400">
        <pre>{bigO}</pre>
      </div>
    </article>
  );
};

export default Algorithm;
