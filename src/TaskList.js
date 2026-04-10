import React from "react";
import {Link} from "react-router-dom";
function TaskList(){
    return (
        <div>
            <h2>Task List</h2>
            <Link to = "/add-task">
            <button>Add New Task</button>
            </Link>
        </div>
    );
}
export default TaskList;