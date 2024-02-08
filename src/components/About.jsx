import { motion } from "framer-motion";
import { componentMotions } from "../util/motion";

const About = () => {
  return (
    <motion.section
      className="flex flex-col gap-3 w-full mb-20"
      variants={componentMotions}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <div className="flex justify-between w-full font-body">
        <h2 className="font-title h-full font-bold text-slate-100 text-3xl">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-2 text-slate-300 font-body">
        <p>
          Summable is a free online summarizing tool that converts articles into
          a short summary.
        </p>

        <p>
          This tool is powered by the Article Extractor API, which leverages the
          OpenAI GPT-4 AI, combined with ScrapeNinja to improve its
          summarization process.{" "}
          <a
            href="https://pixeljets.com/blog/gpt-summary-is-broken/"
            target="_blank"
            className="underline hover:text-slate-200 transition"
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
            className="underline hover:text-slate-200 transition"
          >
            Check out the repository here
          </a>
          .
        </p>
      </div>
    </motion.section>
  );
};

export default About;
