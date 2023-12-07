import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./containers/App";
import "./index.css";
import { searchRobots } from "./reducer";
import "tachyons";

const store = createStore(searchRobots);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

