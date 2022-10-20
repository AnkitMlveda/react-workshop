import "./Todo.css";
//import axios from "axios";
import { useState } from "react";
import { deletetodo,savetodo } from "./Todoaxios";
import { useMutation,useQueryClient } from "@tanstack/react-query";

// const todoUrl = "http://localhost:3000/posts";

export default function Edittodolist({tasks,setTasks,task,index}) {
    const [isedit,setedit] = useState(false);
    const [inputText, setInputText] = useState("");
   // let [iserror, setError] = useState(false);
    const queryclient = useQueryClient();

  const todosave = useMutation(savetodo,{
    onSuccess:(data)=>{
      const gettasks = [...queryclient.getQueryData(["alltodo"])];
      gettasks[index] = data;
      queryclient.setQueryData(["alltodo"], gettasks); 
      setedit(false);
    }
  });
  const savetask = async() => {
    todosave.mutate({ id: tasks[index].id.toString(), inputText });
  // try{
  //  await axios.put(tasks[index].id.toString(), {tasklist:inputText} , {
  //     baseURL: todoUrl,
  //   })
  //   .then((body) => {
  //       let newtasklist = [...tasks];
  //       newtasklist[index].tasklist = inputText;
  //       setTasks(newtasklist);
  //       setedit(false);
  //     });
  //   }
  //   catch(error){
  //       console.error(error);
  //       setError(error);
  //   }
  }

  // if(iserror){
  //   throw iserror;
  // }

  const { mutate } = useMutation(deletetodo,{
    onSuccess: (data) => {
      const gettasks = [...queryclient.getQueryData(["alltodo"])];
      gettasks.splice(index,1);
      queryclient.setQueryData(["alltodo"], gettasks);
    }
  });
  function removetask(index){
    mutate(tasks[index].id.toString());
    //let newtasklist = [...tasks];
    
    // Delete call to delete the task in db.json
    // axios.delete(tasks[index].id.toString(), {
    //   baseURL: todoUrl,
    // })    
    // .then((body) => {
    //   newtasklist.splice(index,1);
    //   setTasks(newtasklist);   
    // }); 
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
                      <button className="btn btn-primary col-sm-2" onClick={savetask}>Save</button>
                )}
                <button onClick={()=>removetask(index)} className="btn btn-danger col-sm-2">Remove</button>
            </div>
          </li> 
  );
} 