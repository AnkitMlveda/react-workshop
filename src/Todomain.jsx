import "./Todo.css";
import { useState,useContext } from "react";
import { v4 as uuid } from "uuid";
import Todolist from "./Todolist";
import { TodoContext } from "./Context";

export default function Todomain() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useContext(TodoContext);

  function updateVal(e) {
    setInputValue(e.target.value);
  }
  function addTodo() {
    if(inputValue === ""){
      document.getElementsByClassName("addbtn").disbled= true;
    }
    else{
    setTasks(tasks.concat([{ value: inputValue, id: uuid()}]));
    setInputValue("");
    }
  }
  return (
    <div className="main">
      <h1 className="active">Todo App</h1>
      <div className="sub row">
        <input value={inputValue} onChange={updateVal} className="form-control col" placeholder="Enter Your Task"></input>
        <button onClick={addTodo} className="btn btn-primary col-sm-1 addbtn">+</button>
      </div>
      <Todolist/>
    </div>
  );
}