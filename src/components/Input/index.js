import React, { useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo } from "../../redux/todo/ToDoActions";
import Todos from "../todos";
//import ClearIcon from "@material-ui/icons/Clear";

const Input = () => {
  const [input, setInput] = useState("");

  let toDoArray = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const addToDoItems = () => {
    if (input === "") {
      return;
    }
    setInput("");
    return dispatch(addToDo(input));
  };
//   const deleteItem = (value) => {
//     console.log(value);
//     return dispatch(deleteToDo(value));
//   };

  return (
    <>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addToDoItems}>Add</button>
      </div>
      <div className="app-todoContainer">
        {toDoArray.map((item, index) => {
          return (
            <div key={index} className="todoItem">
              <Todos item={item} />
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Input;
