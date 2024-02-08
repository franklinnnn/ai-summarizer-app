import { createContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsTriangleFill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import { Slide, toast } from "react-toastify";
import { useLazyGetSummaryQuery } from "../services/article";
import { componentMotions } from "../util/motion";

import Hero from "./Hero";
import Search from "./Search";
import History from "./History";
import SummaryResult from "./SummaryResult";
import Features from "./Features";
import About from "./About";

// export const SearchContext = createContext("");

const Home = () => {
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [articlesHistory, setArticlesHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(true);
  const [language, setLanguage] = useState("en");
  const [showSummary, setShowSummary] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setArticlesHistory(articlesFromLocalStorage);
    }
  }, []);

  const handleScrollIntoView = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("Summarizing your article. Sit tight.", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
    const { data } = await getSummary({
      articleUrl: article.url,
      translateLanguageTo: language,
    });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedArticlesHistory = [newArticle, ...articlesHistory];
      setArticle(newArticle);
      setArticlesHistory(updatedArticlesHistory);

      localStorage.setItem("articles", JSON.stringify(updatedArticlesHistory));
      handleScrollIntoView();
    }
  };

  return (
    <div className="relative h-full flex flex-col gap-16 items-center max-w-5xl mx-auto sm:px-16 px-6 z-10">
      <AnimatePresence>
        <section className="w-full flex flex-col gap-12 mt-12 pt-20 items-center justify-center mx-auto">
          <Hero />
          <Search
            article={article}
            setArticle={setArticle}
            handleSubmit={handleSubmit}
            setLanguage={setLanguage}
            isFetching={isFetching}
          />
        </section>
        <motion.div
          variants={componentMotions}
          initial="hide"
          animate="show"
          exit="hide"
          className="flex flex-col gap-3 w-full"
          key="history"
        >
          <h2
            className="flex items-center font-title font-bold text-slate-100 text-3xl capitalize hover:cursor-pointer group"
            onClick={() => setShowHistory(!showHistory)}
          >
            Summary history
            <span
              className={`text-xs ml-2 ${
                showHistory ? "rotate-180" : "rotate-90 "
              } ease-in-out duration-150`}
            >
              <BsTriangleFill />
            </span>
          </h2>
          {showHistory && (
            <History
              setArticle={setArticle}
              articlesHistory={articlesHistory}
              setShowSummary={setShowSummary}
              handleScrollIntoView={handleScrollIntoView}
            />
          )}
        </motion.div>
        {article.summary === "" ? null : (
          <section ref={scrollRef} key="summary">
            <SummaryResult
              article={article}
              setArticle={setArticle}
              error={error}
              isFetching={isFetching}
            />
          </section>
        )}
      </AnimatePresence>
      <Features />
      <About />
    </div>
  );
};

export default Home;
