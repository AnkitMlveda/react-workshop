import "./Todo.css";
import { useContext } from "react";
import { TodoContext } from "./Context";

export default function Todolist() {
//   const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useContext(TodoContext);

  function edittask(index){
    // let newtasklist = [...tasks];
    // newtasklist.splice(index,1);
    // setTasks(newtasklist);
  }

  function removetask(index){
    let newtasklist = [...tasks];
    newtasklist.splice(index,1);
    setTasks(newtasklist);
  }

  return (
      <ul className="maincontent">
      {tasks.map((task,index) => (
          <li key={task.id} className="content">
            <div className="row">
              <p className="col custom-border">{task.value}</p>
              <button onClick={()=>edittask(index)} className="btn btn-primary col-sm-2">Edit</button>
              <button onClick={()=>removetask(index)} className="btn btn-danger col-sm-2">Remove</button>
            </div>
          </li>
      ))}
      </ul>
  );
}