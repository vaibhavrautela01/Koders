import React, { useState } from "react";

function Create({ addNewTask }) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [status, setStatus] = useState("PENDING");




  const task = { title, description, status};







  const handleSubmit = async (e) => {


   
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });



      const data = await response.json();
      console.log("Task created:", data);



      addNewTask();
      setTitle("");
      setDescription("");
      setStatus("");

   
  };




  return (
    <div className="createCollab">
    <form onSubmit={handleSubmit}>

      <div className="createPageTitle">
      Title:<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" class="v"/>
      </div>

      <div className="createPageDescription">
      Description:<input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" class="v"/>
      </div>
{/* ---------------------------------------------------------------------------------------------       */}
      
      <div className="createPageStatus">

      Status:
      <label>
        <input type="radio" value="PENDING" checked={status === "PENDING"} onChange={(e) => setStatus(e.target.value)}/>
      </label>
      PENDING
      

      <label>
        <input type="radio" value="COMPLETED" checked={status === "COMPLETED"} onChange={(e) => setStatus(e.target.value)}/>
      </label>
      COMPLETED

      </div>
{/* ---------------------------------------------------------------------------------------------          */}




      <button type="submit" id="p">
        Add Task
      </button>
      
    </form>
    </div>
  );

}

export default Create;
