import { getTodoFromLocal, setTodoToLocal } from "@/local/local";
import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: getTodoFromLocal()
  },
  reducers: {


    addTodo: (state, action) => {
      state.todos.push(action.payload);
      setTodoToLocal(state.todos);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);

      setTodoToLocal(state.todos);
    }




  }

});

export const {addTodo , removeTodo} = todoSlice.actions;