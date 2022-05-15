import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user";
import { postsApi } from "./api/posts";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, postsApi.middleware]),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
