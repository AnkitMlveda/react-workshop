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
      <h1 className="active">Todo App</h1>
      <div className="sub row">
        <input value={inputValue} onChange={updateVal} className="form-control col" placeholder="Enter Your Task"></input>
        <button onClick={addTodo} className="btn btn-primary col-sm-2">Add</button>
      </div>
      {tasks.map((task) => (
          <div key={task.id} className="sub1">
            <ul className="content list-group">
              <li className="list-group-item">{task.value}</li>
            </ul>
          </div>
      ))}
    </div>
  );
}