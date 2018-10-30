import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import { connect } from "react-redux";
const TodoApp = () => (
  <div>
    <Header />
    <TodoItem />
  </div>
);

export default connect()(TodoApp);
