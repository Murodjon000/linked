import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PAGE_LIMIT = 20;

export const getFetchWrapper = (options = {}) => {
  const defaultOptions = {
    baseUrl: `https://react-chat-app.com/`,
    prepareHeaders: (headers: any) => {
      if (process.env.NODE_ENV !== "production") {
        headers.set("Cache-control", "no-cache");
      }
      return headers;
    },
    ...options,
  };

  return fetchBaseQuery(defaultOptions);
};
