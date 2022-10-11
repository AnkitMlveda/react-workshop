import "./Todo.css";
import { useState,useContext, useEffect } from "react";
//import { v4 as uuid } from "uuid";
import Todolist from "./Todolist";
// import { TodoContext } from "./Context";

export default function Todomain() {
  const [inputValue, setInputValue] = useState("");
 // const [tasks, setTasks] = useContext(TodoContext);
  const [gettasks, displayTasks] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then((res) => res.json())
    .then((body) => {
      displayTasks(body);
    });
  },[]);
 
  function updateVal(e) {
    setInputValue(e.target.value);
  }
  function addTodo() {
    if(inputValue === ""){
      document.getElementsByClassName("addbtn").disbled= true;
    }
    else{
   //  setTasks(tasks.concat([{ value: inputValue, id: uuid()}]));
   // setTasks(tasks.concat([{ value: inputValue, id: tasks.id}]));
    setInputValue(""); 
 
    // Post call to Add task in db.json
        const tasklist = inputValue;
        const headers = new Headers();
        headers.append('content-type','application/json');
        fetch('http://localhost:3000/posts',{
          method:'POST',
          headers,
          body: JSON.stringify({tasklist})
        })    
        .then((res) => res.json())
        .then((body) => {
          console.log(body);
          // alert("Task is created");
          displayTasks(gettasks.concat([body]));
        });
    // End Post call to add task in db.json  

    }
  } 
  return (
    <div className="main">
      <h1 className="active">Todo App</h1>
      <div className="sub row">
        <input value={inputValue} onChange={updateVal} className="form-control col" placeholder="Enter Your Task"></input>
        <button onClick={addTodo} className="btn btn-primary col-sm-1 addbtn">+</button>
      </div>
      <Todolist tasks={gettasks} setTasks={displayTasks}/>
      <div>
        <pre> 
          {JSON.stringify(gettasks,null,2)}
        </pre>
      </div>
    </div>
  );
}