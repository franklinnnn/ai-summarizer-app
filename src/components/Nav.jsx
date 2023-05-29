import React from "react";
import { logo } from "../assets";

const Nav = () => {
  return (
    <nav className="relative h-12 max-w-5xl mx-auto">
      <div className="w-full flex justify-between items-center p-4">
        <a
          href="https://summable.vercel.app/"
          className="flex items-center gap-1 font-title text-slate-100 text-4xl capitalize max-sm:text-2xl"
        >
          <img
            src={logo}
            alt="Summable logo"
            className="w-8 h-8 object-contain"
          />
          Summable
        </a>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/franklinnnn/ai-summarizer-app")
          }
          className="font-body text-slate-100 bg-slate-100/40 py-1 px-4 rounded border border-slate-100/60 hover:text-slate-800 hover:bg-slate-100 transition-all max-sm:text-sm max-sm:px-2"
        >
          GitHub
        </button>
      </div>
    </nav>
  );
};

export default Nav;
