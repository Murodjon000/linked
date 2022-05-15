import { createApi } from "@reduxjs/toolkit/query/react";
import { Post } from "../../types";
import { getFetchWrapper } from "./utils";

const URL = "api/posts";
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: getFetchWrapper(),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        url: URL,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.catch((e) => {
          return e;
        });
      },
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
