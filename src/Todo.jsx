import "./Todo.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function updateVal(e) {
    setInputValue(e.target.value);
  }
  function addTodo() {
    if(inputValue === ""){
      document.getElementsByClassName("addbtn").disbled= true;
    }
    else{
    setTasks(tasks.concat([{ value: inputValue, id: uuid()}]));
   // console.log(uuid());
    setInputValue("");
    }
  }
  function removetask(a,id){
    let newtasklist = [...tasks];
    newtasklist.splice(tasks.id,1);
    setTasks(newtasklist);
  }
  return (
    <div className="main">
      <h1 className="active">Todo App</h1>
      <div className="sub row">
        <input value={inputValue} onChange={updateVal} className="form-control col" placeholder="Enter Your Task"></input>
        <button onClick={addTodo} className="btn btn-primary col-sm-1 addbtn">+</button>
      </div>
      {tasks.map((task) => (
          <div key={task.id} className="content">
            <div className="row">
              <p className="col custom-border">{task.value}</p>
              <button onClick={removetask} className="btn btn-danger col-sm-3">Remove</button>
            </div>
          </div>
      ))}
    </div>
  );
}