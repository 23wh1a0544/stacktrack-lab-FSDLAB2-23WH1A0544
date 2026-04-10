import React, { useState } from "react";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    const taskData = {
      title: title,
      description: description,
      status: "pending"
    };

    fetch("http://bvrithcloud.com/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-student-id": "23WH1A05xx"
      },
      body: JSON.stringify(taskData)
    })
      .then(res => res.json())
      .then(data => {
        setMsg("Task Added Successfully");
        setTitle("");
        setDescription("");
      });
  };

  return (
    <div>
      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      <p>{msg}</p>
    </div>
  );
}

export default AddTask;