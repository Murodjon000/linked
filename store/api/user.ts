import { createApi } from "@reduxjs/toolkit/query/react";
import { User } from "../../types";
import { getFetchWrapper } from "./utils";

const URL = "api/user";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: getFetchWrapper(),
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: URL,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.catch((e) => e);
      },
    }),
    getUserCoin: builder.query<User, void>({
      query: () => ({
        url: "https://speedy-nodes-nyc.moralis.io/e9feef50210a766a007cb423/eth/mainnet",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.catch((e) => e);
      },
    }),
  }),
});

export const { useGetUserQuery, useGetUserCoinQuery } = userApi;
