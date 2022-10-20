import "./Todo.css";
import { Suspense, useState } from "react";
import Todomain from "./Todomain";
import { TodoContext } from "./Context";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  return (
    <TodoContext.Provider value={[tasks, setTasks]}>
      <Suspense fallback={<h1>Loading....</h1>}>
      <Todomain/>
      </Suspense>
    </TodoContext.Provider>
  );
} 