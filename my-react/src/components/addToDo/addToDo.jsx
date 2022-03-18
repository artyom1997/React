import "./addToDo.css";
import ToDo from "../toDoLine/toDo";
import Context from "../../context";
import { useContext, useState } from "react";

let changeobj = {
  status: false,
  obj: {},
};

function AddToDo() {
  const ContextData = useContext(Context);

  let arr = ContextData.array;
  let [newToDo, setNewToDo] = useState("");
  const getInputValue = (event) => {
    setNewToDo(event.target.value);
  };

  function generateNewToDo() {
    let date = new Date();
    this.id = Math.floor(Math.random() * 100);
    this.text = newToDo;
    this.date = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    this.done = false;
  }

  const addNewToDo = () => {
    if (changeobj.status) {
      arr.forEach((el) => {
        if (el.id === changeobj.obj.id) {
           el.text = newToDo;
        }
      });
      changeobj.status = false;
    } else {
      let obj = new generateNewToDo();
      arr.push(obj);
    }
    ContextData.updArry();
    setNewToDo("");
  };

  function changeToDo(obj) {
    setNewToDo(obj.text);
    changeobj.status = true;
    changeobj.obj = obj;
  }

  return (
    <div className="todo-list-main">
      <div className="add-main">
        <input type="text" onChange={getInputValue} value={newToDo} />
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
          return <ToDo info={el} key={el.id} changeToDo={changeToDo}></ToDo>;
        })}
      </ul>
    </div>
  );
}

export default AddToDo;
