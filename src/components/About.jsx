import React, { useRef } from "react";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { motion } from "framer-motion";

const date = new Date();

const About = ({ showAbout, setShowAbout }) => {
  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.85,
      },
    },
    hide: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between w-full text-slate-100/60 font-body">
        <h2
          className={`hover:cursor-pointer hover:underline ${
            showAbout && "font-title font-bold text-2xl text-slate-100"
          }`}
          onClick={() => setShowAbout(!showAbout)}
        >
          About
        </h2>
        <div
          className={`flex items-center gap-2 text-xl ${showAbout && "hidden"}`}
        >
          <a href="" target="_blank" className="hover:text-slate-100/80">
            <AiOutlineTwitter />
          </a>
          <a href="" target="_blank" className="hover:text-slate-100/80">
            <AiFillFacebook />
          </a>
          <span className="text-xs">
            {date.getFullYear()}{" "}
            <a
              href="https://franklinnn.com"
              target="_blank"
              className="hover:text-slate-100/80 hover:underline"
            >
              Franklin Assa
            </a>
          </span>
        </div>
      </div>
      {showAbout && (
        <motion.div
          className="flex flex-col gap-2 text-slate-100 font-body"
          key={showAbout}
          variants={variants}
          initial="hide"
          animate="show"
          exit="hide"
        >
          <p>
            <span className="font-title">Summable</span> is a free online
            summarizing tool that converts articles into a short summary. Simply
            enter the url of an article or webpage and enjoy a condensed summary
            of its contents.
          </p>
          <p>
            This tool is powered by the Article Extractor API, which leverages
            the OpenAI GPT-4 AI, combined with ScrapeNinja to improve its
            summarization process.{" "}
            <a
              href="https://pixeljets.com/blog/gpt-summary-is-broken/"
              target="_blank"
              className="underline hover:text-slate-100/80"
            >
              Check out how it works here
            </a>
            .
          </p>
          <p>
            Summable was built using React and styled with Tailwind. It is still
            in progress and open source.
            <br />
            <a
              href="https://github.com/franklinnnn/ai-summarizer-app"
              target="_blank"
              className="underline hover:text-slate-100/80"
            >
              Check out the repository here
            </a>
            .
          </p>
        </motion.div>
      )}
      {showAbout && (
        <div className="flex justify-end items-center gap-2 text-xl mt-12 mb-4  text-slate-100 font-body">
          <a href="" target="_blank" className="hover:text-slate-100/80">
            <AiOutlineTwitter />
          </a>
          <a href="" target="_blank" className="hover:text-slate-100/80">
            <AiFillFacebook />
          </a>
          <span className="text-xs">
            {date.getFullYear()}{" "}
            <a
              href="https://franklinnn.com"
              target="_blank"
              className="hover:text-slate-100/80 hover:underline"
            >
              Franklin Assa
            </a>
          </span>
        </div>
      )}
    </div>
  );
};

export default About;
