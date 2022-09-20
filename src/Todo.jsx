import "./Todo.css";
import { useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  function updateVal(e) {
    setInputValue(e.target.value);
  }
  function addTodo() {
    setTasks(tasks.concat([{ value: inputValue, id: Date.now() }]));
    setInputValue("");
  }
  return (
    <div className="main">
      <h1>Todo list</h1>
      <div className="sub">
        <input value={inputValue} onChange={updateVal}></input>
        <button onClick={addTodo}>Add</button>
      </div>
      {tasks.map((task) => (
          <div key={task.id} className="sub1">
            <ul className="content">
              <li>{task.value}</li>
            </ul>
          </div>
      ))}
    </div>
  );
}