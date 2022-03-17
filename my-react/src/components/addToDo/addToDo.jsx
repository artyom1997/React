import "./addToDo.css";
import ToDo from "../toDoLine/toDo";
import Context from "../../context";
import { useContext } from "react";

function AddToDo() {
  const ContextData = useContext(Context)
  let arr = ContextData.array;
  let newToDo = "";
  const getInputValue = (event) => {
    newToDo = event.target.value;
  };
  const addNewToDo = () => {
    let obj = {};
    obj.id = arr[arr.length - 1].id + 1;
    obj.text = newToDo;
    obj.date = "17/3/2022";
    obj.done = false;
    arr.push(obj)
    ContextData.updArry(arr);    
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
        {
        arr.map((el) => {
          return <ToDo info={el} key={el.id}></ToDo>;
        })}
      </ul>
    </div>
  );
}

export default AddToDo;
