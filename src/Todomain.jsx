import "./Todo.css";
import { useState } from "react";
import Todolist from "./Todolist";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function Todomain() {
  const [inputValue, setInputValue] = useState("");
  const [, displayTasks] = useState([]);
  const queryclient = useQueryClient();

  // useEffect(()=>{
  //   axios.get('http://localhost:3000/posts')
  //   .then((res) => {displayTasks(res.data)});
  // },[]);

  const { data: gettasks } = useQuery(["alltodo"], () =>
    axios.get("http://localhost:3000/posts").then((res) => {
      return res.data;
    })
  );

  function updateVal(e) {
    setInputValue(e.target.value);
  }
  function addTodo() {
    if (inputValue === "") {
      document.getElementsByClassName("addbtn").disbled = true;
    } else {
      setInputValue("");

      // Post call to Add task in db.json
      const tasklist = inputValue;
      axios
        .post("http://localhost:3000/posts", {
          tasklist: tasklist,
        })
        .then((res) => {
          const gettasks = queryclient.getQueryData(["alltodo"]);
          queryclient.setQueryData(["alltodo"], gettasks.concat([res.data]));
        });
      // .then((res) => {displayTasks(gettasks.concat([res.data]))});
      // End Post call to add task in db.json
    }
  }
  return (
    <div className="main">
      <h1 className="active">Todo App</h1>
      <div className="sub row">
        <input
          value={inputValue}
          onChange={updateVal}
          className="form-control col"
          placeholder="Enter Your Task"
        ></input>
        <button onClick={addTodo} className="btn btn-primary col-sm-1 addbtn">
          +
        </button>
      </div>
      <Todolist tasks={gettasks} setTasks={displayTasks} />
      <div>
        <pre>{JSON.stringify(gettasks, null, 2)}</pre>
      </div>
    </div>
  );
}
