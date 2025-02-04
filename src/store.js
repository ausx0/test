import { configureStore } from "@reduxjs/toolkit";
import  taskReducer  from "../src/features/tasks/taskSlice"

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});