import "./todoList.css";
import AddToDo from "../addToDo/addToDo";
import Context from "../../context";
import { useState } from "react";

function ToDoList() {
   const [array,setArry] = useState([{id:1,text:'abcdgfasddaad',done:false,date:'17/3/2022'}]);
   
  function updArry(obj) {
    setArry(prev => [...prev, obj]);
  }
   

  return (
    <Context.Provider value={{array,updArry}}>
      <div className="main">
        <AddToDo></AddToDo>
      </div>
    </Context.Provider>
  );
}

export default ToDoList;
