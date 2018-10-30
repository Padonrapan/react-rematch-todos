import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";
import store from "./models/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
