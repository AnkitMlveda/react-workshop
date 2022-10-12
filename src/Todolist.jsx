import "./Todo.css";
import Edittodolist from "./Edittodolist";

export default function Todolist({tasks,setTasks}) {

  return (
      <ul className="maincontent">
      {tasks.map((task,index) => (
            <Edittodolist index={index} task={task} key={task.id} tasks={tasks} setTasks={setTasks}/>
      ))}
      </ul>
  );
} 