import "./addToDo.css";
import ToDo from "../toDoLine/toDo";
import Context from "../../context";
import { useContext } from "react";

function AddToDo() {
  const ContextData = useContext(Context);
  let arr = ContextData.array;
  let newToDo = "";
  const getInputValue = (event) => {
    newToDo = event.target.value;
  };
   
 function generateNewToDo() {
   let date = new Date();
   this.id = Math.floor(Math.random() * 100);
   this.text =  newToDo;
   this.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
   this.done = false
 }

  const addNewToDo = () => {
    let obj = new generateNewToDo();
    arr.push(obj);
    ContextData.updArry();
  };
  return (
    <div className="todo-list-main">
      <div className="add-main">
        <input type="text" onChange={getInputValue} />
        <button
          onClick={() => {
            addNewToDo();
          }}
        >
          ADD
        </button>
      </div>
      <ul className="todo-list">
        {arr.map((el) => {
          return <ToDo info={el} key={el.id}></ToDo>;
        })}
      </ul>
    </div>
  );
}

export default AddToDo;
