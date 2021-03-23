import { ADD_TODO, DELETE_TODO } from "./ToDoTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        
        todos: [...state.todos].filter((i)=>{
            return i!==action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
