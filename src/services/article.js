import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        // {
        //   const { articleUrl, translateLanguageTo } = params;
        //   console.log(params);
        //   return {
        //     url: `/summarize?url=${encodeURIComponent(
        //       articleUrl
        //     )}&length=5&lang${translateLanguageTo}`,
        //   };
        // },
        `/summarize?url=${encodeURIComponent(
          params.articleUrl
        )}&length=5&lang=${params.translateLanguageTo}`,
    }),
  }),
});
export const { useLazyGetSummaryQuery } = articleApi;
