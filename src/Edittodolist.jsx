import "./Todo.css";
// import { useContext } from "react";
// import { TodoContext } from "./Context";
import axios from "axios";
import { useState } from "react";

const todoUrl = "http://localhost:3000/posts";

export default function Edittodolist({tasks,setTasks,task,index}) {
//   const [tasks, setTasks] = useState([]);
//  const [tasks, setTasks] = useContext(TodoContext);
    const [isedit,setedit] = useState(false);
    const [inputText, setInputText] = useState("");

  function savetodo(index){
   // console.log(tasks,index);
    axios.put(tasks[index].id.toString(), {tasklist:inputText} , {
      baseURL: todoUrl,
    })
    .then((body) => {
        let newtasklist = [...tasks];
        //console.log(body);
        newtasklist[index].tasklist = inputText;
        setTasks(newtasklist);
        setedit(false);
      });
  }

  function removetask(index){
    let newtasklist = [...tasks];
    
    // Delete call to delete the task in db.json
    axios.delete(tasks[index].id.toString(), {
      baseURL: todoUrl,
    })    
    .then((body) => {
     // console.log(body);
      newtasklist.splice(index,1);
      setTasks(newtasklist);   
    }); 
    // End Delete call to delete the task in db.json

  }

  return (
          <li key={task.id} className="content">
            <div className="row">
                {isedit && (
                <input value={inputText} className="form-control col" onChange={(e) => setInputText(e.target.value)}/>
                )}
                {!isedit && <p className="col custom-border">{task.tasklist}</p>}
                <button className="btn btn-primary col-sm-2" 
                      onClick={() => {
                        setedit(!isedit);
                              if (!isedit) {
                                setInputText(task.tasklist);
                            }
                          }}>
                      {isedit ? "Cancel" : "Edit"}
                </button> 
                {isedit && (
                      <button className="btn btn-primary col-sm-2" onClick={()=>savetodo(index,tasks)}>Save</button>
                )}
                <button onClick={()=>removetask(index)} className="btn btn-danger col-sm-2">Remove</button>
            </div>
          </li> 
  );
} 