import React from "react";
import { loader } from "../assets";
import { motion } from "framer-motion";
import { ImSad } from "react-icons/im";

const SummaryResult = ({ article, error, isFetching }) => {
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
      y: -20,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="mb-2 max-w-full flex justify-center items-center"
      key={article.url}
      variants={variants}
      initial="hide"
      animate="show"
      exit="hide"
    >
      {isFetching ? (
        <div className="flex flex-col items-center">
          <img src={loader} alt="loader" className="w-24 h-24 object-contain" />
          <span className="text-slate-100 text-lg font-body">
            Summarizing your article...
          </span>
        </div>
      ) : error ? (
        <p className="flex flex-col gap-2 justify-center font-title font-bold text-slate-100 text-center">
          <ImSad />
          Something's gone wrong <br />{" "}
          <span className="font-body font-normal text-gray-700">
            {error?.data?.error}
          </span>
        </p>
      ) : (
        article.summary && (
          <div className="flex flex-col gap-3">
            <h2 className="font-title font-bold text-slate-100 text-2xl capitalize">
              Article summary
            </h2>
            <div className="rounded-sm border border-slate-100 bg-slate-100 backdrop-blur p-4">
              <p className="font-body font-medium text-lg text-slate-900 max-sm:text-base">
                {article.summary}
              </p>
            </div>
          </div>
        )
      )}
    </motion.div>
  );
};

export default SummaryResult;
