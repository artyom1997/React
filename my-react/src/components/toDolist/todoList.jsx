import "./todoList.css";
import AddToDo from "../addToDo/addToDo";
import Context from "../../context";
import { useState } from "react";

function ToDoList() {
  const [array, setArry] = useState([]);

  function updArry() {
    let arr = [...array];
    setArry(arr);
  }

  return (
    <Context.Provider value={{ array, updArry }}>
      <div className="main">
        <AddToDo></AddToDo>
      </div>
    </Context.Provider>
  );
}

export default ToDoList;
