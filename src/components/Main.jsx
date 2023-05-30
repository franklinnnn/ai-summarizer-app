import React, { createContext, useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import Search from "./Search";
import History from "./History";
import SummaryResult from "./SummaryResult";
import About from "./About";
import { useLazyGetSummaryQuery } from "../services/article";
import { BsTriangleFill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";

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
    console.log(
      `fetching ${isFetching}, showing summary ${showSummary}, article ${article.url}`
    );
    setShowSummary(true);
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedArticlesHistory = [newArticle, ...articlesHistory];
      setArticle(newArticle);
      setArticlesHistory(updatedArticlesHistory);

      localStorage.setItem("articles", JSON.stringify(updatedArticlesHistory));
    }
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
        handleSubmit={handleSubmit}
      />
      <AnimatePresence>
        <section className="flex flex-col gap-3 w-full" key="history">
          <h2
            className="flex items-center gap-1 font-title font-bold text-slate-100 text-2xl capitalize hover:cursor-pointer hover:underline w-1/3 max-sm:w-full group"
            onClick={() => setShowHistory(!showHistory)}
          >
            Summary history
            <span
              className={`text-xs ${
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
        </section>
        <section ref={scrollRef} key="summary">
          <SummaryResult
            article={article}
            error={error}
            isFetching={isFetching}
          />
        </section>
        <section
          className={`mx-auto w-full mb-2 ${
            showSummary || showAbout
              ? "relative"
              : "absolute px-14 bottom-0 max-sm:px-6"
          }`}
          key="about"
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
