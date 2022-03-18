import "./toDo.css";
import Context from "../../context";
import { useContext } from "react";

function ToDo(props) {
  const ContextData = useContext(Context);
  let arr = ContextData.array;
  function chackToDo(id) {
    arr.forEach((el) => {
      if (el.id === id) {
        el.done = !el.done;
      }
    });
    ContextData.updArry();
  }

  function deleteToDo(obj) {
     let index = arr.indexOf(obj)
     arr.splice(index,1)
    ContextData.updArry();
  }

  function changeToDo(obj){

    props.changeToDo(obj)
  }

  return (
    <li className="todo">
      <input
        className="todo-checkbox"
        type="checkbox"
        onChange={chackToDo.bind(null, props.info.id)}
      />
      <div className="todo-info">
        <div className={`todo-text ${props.info.done ? "done" : ""}`}>
          {props.info.text}
        </div>
        <div>{props.info.date}</div>
      </div>
      <div className="todo-controll">
        <button onClick={changeToDo.bind(null, props.info)}>Change</button>
        <button onClick={deleteToDo.bind(null, props.info)}>X</button>
      </div>
    </li>
  );
}

export default ToDo;
