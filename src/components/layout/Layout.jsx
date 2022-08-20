import "./style.css";
import React, { useState } from "react";
import Form from "../form/Form";
import List from "../list/List";
import Header from "../header/Header";

export default function Layout() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Header />
      <Form todoList={todoList} setTodoList={setTodoList} />
      {console.log(todoList)}
      <List todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
