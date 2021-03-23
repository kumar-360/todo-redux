import {createStore} from "redux";
import todoReducer from "./todo/ToDoReducers"

const store=createStore(todoReducer);
export default store;