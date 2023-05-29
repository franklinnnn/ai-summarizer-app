import React, { createContext, useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import Search from "./Search";
import { useLazyGetSummaryQuery } from "../services/article";
import History from "./History";
import SummaryResult from "./SummaryResult";
import { BsTriangleFill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import About from "./About";

export const SearchContext = createContext("");

const Main = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const [articlesHistory, setArticlesHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setArticlesHistory(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({
      articleUrl: article.url,
    });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedArticlesHistory = [newArticle, ...articlesHistory];
      setArticle(newArticle);
      setArticlesHistory(updatedArticlesHistory);

      localStorage.setItem("articles", JSON.stringify(updatedArticlesHistory));
    }
    setShowSummary(true);
  };

  const handleScrollIntoView = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`relative h-[calc(100vh-4rem)] flex flex-col gap-12 items-center max-w-5xl mx-auto sm:px-16 px-6 z-10  ${
        showSummary ? "justify-start mt-12" : "justify-center"
      }`}
    >
      <Hero />
      <Search
        article={article}
        setArticle={setArticle}
        setArticlesHistory={setArticlesHistory}
        handleSubmit={handleSubmit}
      />
      <AnimatePresence>
        <section className="flex flex-col gap-3 w-full">
          <h2
            className="flex items-center gap-1 font-title font-bold text-slate-100 text-2xl capitalize hover:cursor-pointer hover:underline w-1/3"
            onClick={() => setShowHistory(!showHistory)}
          >
            Summary history
            <span
              className={`text-xs rotate-90 ${
                showHistory && "rotate-180"
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
        </section>
        <section ref={scrollRef}>
          {showSummary && (
            <SummaryResult
              article={article}
              error={error}
              isFetching={isFetching}
            />
          )}
        </section>
        <section
          className={`mx-auto w-full ${
            showSummary || showAbout ? "relative" : "absolute px-14 bottom-0"
          }`}
        >
          <About
            showAbout={showAbout}
            setShowAbout={setShowAbout}
            showSummary={showSummary}
          />
        </section>
      </AnimatePresence>
    </div>
  );
};

export default Main;
