import { useState } from "react";
import { useLazyGetSummaryQuery } from "../services/article";
import Search from "./Search";
import SummaryResult from "./SummaryResult";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  return (
    <section className="mt-16 w-full max-w-xl">
      <Search
        article={article}
        setArticle={setArticle}
        getSummary={getSummary}
      />
      <SummaryResult article={article} error={error} isFetching={isFetching} />
    </section>
  );
};

export default Demo;
