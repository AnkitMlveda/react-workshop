import "./Todo.css";
import { useState } from "react";
import Todomain from "./Todomain";
import { TodoContext } from "./Context";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  return (
    <TodoContext.Provider value={[tasks, setTasks]}>
      <Todomain/>
    </TodoContext.Provider>
  );
}