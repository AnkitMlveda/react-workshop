import './Greetings.css';
import { useState } from "react";

export default function Greetings(){
    let  [getname,setname]= useState('');
    function addvalue(e){
        if(e.target.value === ""){
        setname('');
        }
        else{
        setname('Welcome,'+e.target.value+'!');
        }
    }
    return(
        <div className='main'>
            <div className='sub'>
            <input type="text" onChange={addvalue} className="userinput" placeholder='Enter your name'/>
            <h1>{getname}</h1>
            </div>
       </div>
    );
}