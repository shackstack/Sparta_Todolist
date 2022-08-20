import "./style.css";
import React, { useState, useRef } from "react";

export default function Form({ todoList, setTodoList }) {
  //부모컴포넌트(레이아웃)로 부터 todoList, setTodoList를 받아왔어
  const [inputT, setInputT] = useState(""); //제목
  const [inputC, setInputC] = useState(""); //내용
  const nextId = useRef(1);

  const addItem = () => {
    setTodoList([
      ...todoList,
      { id: nextId.current, title: inputT, contents: inputC, process: true },
    ]);
    nextId.current += 1;
  };

  return (
    <div>
      <form className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            value={inputT} //인풋 값은 inputT
            onChange={(event1) => setInputT(event1.target.value)} //inputT 값을 텍스트상자 타겟 값으로 바꿔줘
            type="text"
            name="title"
            className="add-input input-body"
          />
          <label className="form-label">내용</label>
          <input
            value={inputC}
            onChange={(event2) => setInputC(event2.target.value)}
            type="text"
            name="body"
            className="add-input"
          />
        </div>
        <button type="button" onClick={addItem} className="add-button">
          추가하기
        </button>
      </form>
    </div>
  );
}
