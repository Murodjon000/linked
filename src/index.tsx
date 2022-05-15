import ReactDOM from "react-dom";
import { App } from "./App";
import { store } from "../store";
import { Provider } from "react-redux";
import { worker } from "./api/mockServer";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root: any = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
