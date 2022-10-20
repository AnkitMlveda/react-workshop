import "./Todo.css";
import Edittodolist from "./Edittodolist";
import {ErrorBoundary} from "react-error-boundary";

export default function Todolist({tasks,setTasks}) {
  return (
    <ErrorBoundary fallback={<h1>Something went wrong!</h1>}>
      <ul className="maincontent">
      {tasks.map((task,index) => (  
            <Edittodolist index={index} task={task} key={task.id} tasks={tasks} setTasks={setTasks}/>
      ))}
      </ul>
    </ErrorBoundary>
  );
} 