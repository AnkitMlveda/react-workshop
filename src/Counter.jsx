import './Counter.css';
import { useState } from "react";

export default function Counter(){
    let [countnumber,currentcount] = useState(0);
    function counthandler(){
        currentcount(countnumber + 1);
    }
    function resethandler(){
        currentcount(0);
    }
    return(
        <div className="countermain">
            <button onClick={counthandler} className="countbtn">Count Button</button>
            <input value={countnumber}></input>
            <h1>Current Count:{countnumber}</h1>
            <button onClick={resethandler} className="resetbutton">Reset</button>
        </div>
    );
}