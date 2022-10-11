import "./Todo.css";
// import { useContext } from "react";
// import { TodoContext } from "./Context";
import axios from "axios";

const todoUrl = "http://localhost:3000/posts";

export default function Todolist({tasks,setTasks}) {
//   const [tasks, setTasks] = useState([]);
//  const [tasks, setTasks] = useContext(TodoContext);

  function edittask(index){
  
  }

  function removetask(index){
    let newtasklist = [...tasks];

    // Delete call to delete the task in db.json
    console.log(tasks[index].id);
    axios.delete(tasks[index].id.toString(), {
      baseURL: todoUrl,
    })    
    .then((body) => {
      console.log(body);
      alert("Task is Deleted");
      newtasklist.splice(index,1);
      setTasks(newtasklist);   
    }); 
    // End Delete call to delete the task in db.json

  }

  return (
      <ul className="maincontent">
      {tasks.map((task,index) => (
          <li key={task.id} className="content">
            <div className="row">
              <p className="col custom-border">{task.tasklist}</p>
              <button onClick={()=>edittask(index)} className="btn btn-primary col-sm-2">Edit</button>
              <button onClick={()=>removetask(index)} className="btn btn-danger col-sm-2">Remove</button>
            </div>
          </li>
      ))}
      </ul>
  );
}