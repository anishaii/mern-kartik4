import { todoSlice } from "@/pages/todos/todoSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
    [todoSlice.name]: todoSlice.reducer
    }
});