import { motion } from "framer-motion";
import { ImSad } from "react-icons/im";

import { componentMotions } from "../util/motion";
import Button from "./ui/Button";

const SummaryResult = ({ article, error, setArticle }) => {
  const handleNewSummary = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setArticle({ url: "" });
  };

  return (
    <motion.div
      className="mb-2 max-w-full flex flex-col justify-center items-center"
      key={article.url}
      variants={componentMotions}
      initial="hide"
      animate="show"
      exit="hide"
    >
      {error ? (
        <p className="flex flex-col gap-2 items-center justify-center font-title font-bold text-slate-100 text-center">
          <span className="text-2xl">
            <ImSad siez={32} />
          </span>
          Something's gone wrong <br />{" "}
          <span className="font-body ">{error?.data?.error}</span>
        </p>
      ) : (
        article.summary && (
          <div className="flex flex-col gap-3">
            <h2 className="font-title h-full font-bold text-slate-100 text-3xl">
              Article summary
            </h2>
            <div className="rounded-md border border-slate-100 bg-slate-100 shadow-md backdrop-blur p-4">
              <p className="font-body font-medium text-xl text-justify text-slate-900 max-sm:text-base">
                {article.summary}
              </p>
            </div>

            <div className="w-full flex justify-end mt-2">
              <Button onClick={handleNewSummary}>New summary</Button>
            </div>
          </div>
        )
      )}
    </motion.div>
  );
};

export default SummaryResult;
