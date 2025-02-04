import { createSlice } from "@reduxjs/toolkit";


const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};


const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const initialState = {
  tasks: loadTasksFromLocalStorage(), 
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks); 
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks); 
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.status = task.status === "completed" ? "markAsPending" : "completed";
        saveTasksToLocalStorage(state.tasks); 
      }
    },
    updateTask: (state, action) => {
      const { id, title, description, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
        task.status = status;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTaskCompletion, updateTask } = taskSlice.actions;
export default taskSlice.reducer;