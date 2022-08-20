import "./style.css";
import React from "react";

export default function Todo({ idx, todoList, setTodoList }) {
  let A = [];
  const clickDel = (idx) => {
    A = todoList;
    A[idx].process = null;
    setTodoList([...A]);
  };
  const change = (idx) => {
    A = todoList;
    A[idx].process = A[idx].process ? false : true;
    setTodoList([...A]);
  };

  return (
    <div id={idx} className="list-wrapper">
      <div className="todo-container">
        <div>
          <h2 className="todo-title">{todoList[idx].title}</h2>
          <div>{todoList[idx].contents}</div>
        </div>
        <div className="button-set">
          <button
            type="button"
            onClick={() => clickDel(idx)}
            className="todo-delete-button button"
          >
            삭제하기
          </button>
          <button
            type="button"
            onClick={() => change(idx)}
            className="todo-complete-button button"
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
}
