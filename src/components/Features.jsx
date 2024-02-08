import React from "react";
import { motion } from "framer-motion";
import { CgReadme } from "react-icons/cg";
import { HiOutlineCursorClick } from "react-icons/hi";
import { MdOutlineLanguage } from "react-icons/md";

import { componentMotions, featuresAnimation } from "../util/motion";

const Features = () => {
  const features = [
    {
      title: "One-click summarization",
      description:
        "Simply enter the url of an article or webpage and enjoy a condensed summary of its contents.",
      icon: <HiOutlineCursorClick size={32} />,
    },
    {
      title: "Multilingual support",
      description:
        "Translate articles from various languages into a language of your choice while retaining the accuracy and coherence of the summary.",
      icon: <MdOutlineLanguage size={32} />,
    },
    {
      title: "Distraction-free reading",
      description:
        "No ads, graphics and other online distractions providing an uncluttered reading experience.",
      icon: <CgReadme size={32} />,
    },
  ];
  return (
    <motion.section
      variants={componentMotions}
      initial="hide"
      animate="show"
      exit="hide"
      className="text-slate-100 font-body"
    >
      <h3 className="font-title text-3xl mb-3">Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            {...featuresAnimation(index)}
            key={feature.title}
            className="grid grid-rows-3 items-center gap-3 p-4 bg-primary rounded-md pb-6 shadow-md"
          >
            <h3 className="flex items-center justify-center font-title h-full text-lg font-semibold row-span-1">
              {feature.title}
            </h3>
            <div className="flex row-span-1 w-full justify-center items-center mb-4">
              <span className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary">
                {feature.icon}
              </span>
            </div>
            <p className="row-span-2 flex items-center justify-center sm:items-start h-full">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Features;
