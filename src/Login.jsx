import { useState } from 'react';
import './Login.css';

export default function Login(){
    let [getuseremail,setuseremail] = useState("");
    let [getuserpass,setuserpass] = useState("");

    function getemail(){
       setuseremail(document.getElementById("email").value);
    }
    function getpassword(){
       setuserpass(document.getElementById("pwd").value);
    }
    function validateform(e){
        e.preventDefault();
        if(!getuseremail && !getuserpass){
            alert("Please Enter Login Detail");
        }
        else{
            alert("Logged in Successfully!");
        }
        setuseremail("");
        setuserpass("");
    }
    return(
        <div className="container mt-3">
        <h2>Login Form</h2>
        <form id="login">
          <div className="mb-3 mt-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control col-md-3" id="email" placeholder="Enter email" value={getuseremail} onChange={getemail}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" value={getuserpass} onChange={getpassword}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={validateform}>Login</button>
        </form>
      </div>
    );
}