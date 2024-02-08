import { motion } from "framer-motion";
import { componentMotions } from "../util/motion";
import Languages from "./ui/Languages";
import Button from "./ui/Button";

const Search = ({
  article,
  setArticle,
  handleSubmit,
  isFetching,
  setLanguage,
}) => {
  return (
    <motion.section
      variants={componentMotions}
      initial="hide"
      animate="show"
      exit="hide"
      className="flex flex-col w-full gap-2"
    >
      <form
        className="relative flex flex-col justify-center items-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between w-full bg-slate-100 rounded-md">
          <input
            type="url"
            placeholder="Enter URL"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            required
            className="block w-full rounded-md border border-gray-200 bg-slate-100 py-2.5 px-6 text-sm shadow-lg font-body font-medium focus:outline-none focus:ring-0 peer"
          />
          <Languages setLanguage={setLanguage} />
        </div>
        <Button type="submit" disabled={!article.url}>
          {" "}
          {isFetching ? "Summarizing..." : "Summarize"}
        </Button>
      </form>
    </motion.section>
  );
};

export default Search;
