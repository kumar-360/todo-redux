import { ADD_TODO } from "./ToDoTypes";
import {DELETE_TODO} from "./ToDoTypes"

export const addToDo = (data) => {
  return {
    type: ADD_TODO,
    payload:data
  };
};

export const deleteToDo = (value) => {
    return {
      type: DELETE_TODO,
      payload:value
    };
  };
