import "./toDo.css";


function ToDo(props) {
  return (
      <li className="todo">
           <input className="todo-checkbox" type="checkbox" />
           <div className="todo-info">
           <div className="todo-text">{props.info.text}</div>
            <div>{props.info.date}</div>
           </div>
           <div className="todo-controll">
               <button>Y</button>
               <button>X</button>
           </div>
      </li>
  );
}

export default ToDo;
