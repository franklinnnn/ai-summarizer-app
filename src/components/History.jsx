import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiCopy } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";

const History = ({
  setArticle,
  articlesHistory,
  setShowSummary,
  handleScrollIntoView,
}) => {
  const [copiedUrl, setCopiedUrl] = useState("");

  const handleSetArticle = (item) => {
    setArticle(item);
    setShowSummary(true);
    handleScrollIntoView();
  };

  const handleCopyUrl = (copyUrl) => {
    setCopiedUrl(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopiedUrl(false), 3000);
  };

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
    <motion.div
      className="flex flex-col gap-1 max-h-60 overflow-y-auto"
      key={articlesHistory}
      variants={variants}
      initial="hide"
      animate="show"
      exit="hide"
    >
      {articlesHistory.map((item, index) => (
        <div
          key={`link-${index}`}
          onClick={() => handleSetArticle(item)}
          className="p-2 flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-sm cursor-pointer"
        >
          <div
            className="w-6 h-6 rounded-full text-slate-500 bg-slate-200 flex justify-center items-center cursor-pointer hover:text-slate-900"
            title="Copy article link"
            onClick={() => handleCopyUrl(item.url)}
          >
            {copiedUrl === item.url ? (
              <BsCheck className="text-green-600 text-2xl" />
            ) : (
              <BiCopy />
            )}
          </div>
          <p className="flex-1 font-body text-blue-800 font-medium text-sm truncate">
            {item.url}
          </p>
          <div className="p-1 bg-slate-200 rounded-full">
            <a
              href={item.url}
              target="_blank"
              title="Go to full article"
              className="text-slate-500  hover:text-slate-900"
            >
              <RxExternalLink />
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default History;
