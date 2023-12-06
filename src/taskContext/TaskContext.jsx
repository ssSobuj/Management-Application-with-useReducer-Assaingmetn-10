/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";

export const TaskContext = createContext(null);
const INITIAL_TASKS = {
  tasks: [],
  inputValue: "",
  taskToBeUpdetedId: 0,
  isUpdeting: false,
};

export default function TaskContextPorvider({ children }) {
  const [state, dispatch] = useReducer(
    taskReducer,
    JSON.parse(localStorage.getItem("state")) || INITIAL_TASKS
  );

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
