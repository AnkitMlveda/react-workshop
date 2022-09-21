import { useState } from 'react';
import "./Signup.css";

export default function Signup(){
    let [getuserfirstname,setuserfirstname] = useState("");
    let [getuserlastname,setuserlastname] = useState("");
    let [getuserage,setuserage] = useState("");
    let [getuserlocation,setuserlocation] = useState("");
    let [getuseremail,setuseremail] = useState("");
    let [getuserpass,setuserpass] = useState("");

    let [getuserfirstnameerror,setuserfirstnameerror] = useState("");
    let [getuserlastnameerror,setuserlastnameerror] = useState("");
    let [getuserageerror,setuserageerror] = useState("");
    let [getuseremailerror,setuseremailerror] = useState("");
    let [getuserpasserror,setuserpasserror] = useState("");

     function getfirstname(){
        setuserfirstname(document.getElementById("fname").value);
     }
     function getlastname(){
        setuserlastname(document.getElementById("lname").value);
     }
     function getage(){
        setuserage(document.getElementById("age").value);
     }
     function getlocation(){
        setuserlocation(document.getElementById("country").value);
     }
     function getemail(){
       setuseremail(document.getElementById("email").value);
     }
     function getpassword(){
       setuserpass(document.getElementById("pwd").value);
     }

    function validateform(e){
        e.preventDefault();
        if(getuserfirstname == ""){
            setuserfirstnameerror("Please Enter The First Name");
        }
        else{
            setuserfirstnameerror("");
        }
        
        if(getuserlastname == ""){
            setuserlastnameerror("Please Enter The Last Name");
        }
        else{
            setuserlastnameerror("");
        }
        
        if(getuserage == ""){
            setuserageerror("Please Enter The Age");
        }
        else{
            setuserageerror("");
        }
        
        if(getuseremail == ""){
            setuseremailerror("Please Enter The Email");
        }
        else{
            setuseremailerror("");
        }
        
        if(getuserpass == ""){
            setuserpasserror("Please Enter The Password");
        }
        else{
            setuserpasserror("");
        }

        if(getuserfirstnameerror == "" && getuserlastnameerror == "" && getuserageerror == "" && getuseremailerror == "" && getuserpasserror == "" && getuserfirstname != "" && getuserlastname != "" && getuserage != "" && getuseremail != "" && getuserpass != ""){
            alert('Sigup Sucessfully!');
        }
    }

    function clearform(e){
        e.preventDefault();
        setuserfirstname("");
        setuserlastname("");
        getage(setuserage(document.getElementById("age").value = ""));
        getlocation(document.getElementById("country").value = "-: Select Your Location :-");
        setuseremail("");
        setuserpass("");
    }
    return(
        <div className="container mt-3">
        <h2>Signup Form</h2>
        <form id="login">
          <div className="mb-3 mt-3">
            <label className="form-label">First Name:</label>
            <input type="text" className="form-control col-md-3" id="fname" placeholder="Enter First Name" value={getuserfirstname} onChange={getfirstname}/>
            <p className="errormsg">{getuserfirstnameerror}</p>
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Last Name:</label>
            <input type="text" className="form-control col-md-3" id="lname" placeholder="Enter Last Name" value={getuserlastname} onChange={getlastname}/>
            <p className="errormsg">{getuserlastnameerror}</p>
          </div>
          <div className="mb-3 mt-3">
          <label className="form-label">Select Your Age</label>
          <input type="number" className="form-control col-md-3" id="age" placeholder="Select Your Age" value={getuserage} onChange={getage}/>
          <p className="errormsg">{getuserageerror}</p>
          </div>
          <div className="mb-3 mt-3">
          <label className="form-label">Select Your Location</label>
          <select className="form-select" id="country" value={getuserlocation} onChange={getlocation}>
                <option disabled>-: Select Your Location :-</option>
                <option>India</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>United States</option>
          </select>
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control col-md-3" id="email" placeholder="Enter email" value={getuseremail} onChange={getemail}/>
            <p className="errormsg">{getuseremailerror}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" value={getuserpass} onChange={getpassword}/>
            <p className="errormsg">{getuserpasserror}</p>
          </div>
          <button type="submit" className="btn btn-primary custombtn" onClick={validateform}>Signup</button>
          <button type="button" className="btn btn-primary" onClick={clearform}>Clear</button>
        </form>
      </div>
    );
}