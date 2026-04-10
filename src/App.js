import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<TaskList/>}/>
        <Route path = "/add-task" element ={<AddTask/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
