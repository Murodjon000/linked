/* eslint-disable no-bitwise */
import { rest, setupWorker } from "msw";
import { USER } from "./data/user";
import { POSTS } from "./data/posts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const worker = setupWorker(
  rest.get("https://react-chat-app.com/api/posts", (req, res, ctx) =>
    res(ctx.json(POSTS))
  ),
  rest.get("https://react-chat-app.com/api/user", (req, res, ctx) =>
    res(ctx.json(USER))
  )
);
