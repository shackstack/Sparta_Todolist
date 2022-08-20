import "./style.css";
import React, { useState } from "react";
import Todo from "../todo/Todo";

export default function List({ todoList, setTodoList }) {
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      {todoList.map((item, idx) => {
        console.log("idx", idx, "process", item.process);
        if (item.process === true) {
          return (
            <Todo
              key={idx}
              idx={idx}
              todoList={todoList}
              setTodoList={setTodoList}
              onChange={item.process}
            />
          );
        }
      })}

      <h2 className="list-title">Done..! 🎉</h2>
      {todoList.map((item, idx) => {
        if (item.process === false) {
          return (
            <Todo
              key={idx}
              idx={idx}
              todoList={todoList}
              setTodoList={setTodoList}
              onChange={item.process}
            />
          );
        }
      })}
    </div>
  );
}
