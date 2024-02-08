import { motion } from "framer-motion";
import { componentMotions } from "../util/motion";

const Hero = () => {
  return (
    <motion.section
      variants={componentMotions}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <header className="w-full flex justify-center items-center flex-col">
        <h1 className="font-title mt-5 text-5xl font-extrabold leading-[1.15] text-slate-100 sm:text-6xl text-center">
          Summarize articles with
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent ml-4">
            AI
          </span>
        </h1>
        <h2 className="font-body mt-5 text-lg text-slate-100  sm:text-xl text-center max-w-2xl">
          Simplify your reading with Summable, an open-source article summarizer
        </h2>
      </header>
    </motion.section>
  );
};

export default Hero;
