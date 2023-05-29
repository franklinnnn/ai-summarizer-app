import React from "react";
import { FiLink2 } from "react-icons/fi";

const Search = ({ article, setArticle, handleSubmit }) => {
  return (
    <section className="flex flex-col w-full gap-2">
      <form
        className="relative flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="absolute left-0 my-2 ml-3 w-5 text-slate-500">
          <FiLink2 />
        </div>
        <input
          type="url"
          placeholder="Enter URL"
          value={article.url}
          onChange={(e) => {
            setArticle({ ...article, url: e.target.value });
          }}
          required
          className="block w-full rounded-sm border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-body font-medium focus:border-black focus:outline-none focus:ring-0 peer"
        />
        <button
          type="submit"
          className="hover:border-slate-700 hover:text-slate-900 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-slate-200 font-sans text-sm font-medium text-slate-400 peer-focus:border-slate-700 peer-focus:text-slate-700"
        >
          Enter
        </button>
      </form>
    </section>
  );
};

export default Search;
