import React,{useState} from "react";
function AddTask(){
    const [title,setTitle] = useState("");
    const [description,setDescription]= useState("");
    return (
        <div>
            <h2>Add Task</h2>
            <input 
                type = "text"
                placeholder="Enter Title"
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}/>
                <br /><br />

                <input
                    type ="text"
                    placeholder="Enter Description"
                    value = {description}
                    onChange={(e)=>setDescription(e.target.value)}/>
                    <br /><br />
                    <button></button>

        </div>
    );
}
export default AddTask;