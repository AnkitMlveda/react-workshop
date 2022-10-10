import React from 'react';
import './App.css';

function App() {
  /**
   * 
   * @type {import('react').FormEventHandler<HTMLFormElement>} e 
   */
  function displaydata(e){
    e.preventDefault();
    console.log(e.target);
    const formData= new FormData(e.target)
    const title= formData.get("title")
    const author= formData.get("author");
    const headers = new Headers();
    headers.append('content-type','application/json');
    fetch('http://localhost:3000/posts',{
      method:'POST',
      headers,
      body: JSON.stringify({title,author})
    })    
    .then((res) => res.json())
    .then((body) => {
      console.log(body);
      alert("Post is created");
    });
  }
  return (
    <form onSubmit={displaydata}>
      <div className="row">
      <div className="col">
        <input  className="form-control" type="text" name="title"></input>
      </div>
      <div className="col">
        <input  className="form-control" type="text" name="author"></input>
      </div>
      <div className="col">
        <button className="btn btn-primary col-sm-2" type="submit">Post</button>
      </div>
      </div>
    </form>
  );
}

export default App;
