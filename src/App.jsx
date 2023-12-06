import { useContext } from "react";
import "./App.css";
import TaskForm from "./components/TaskItem/TaskForm";
import { TaskContext } from "./taskContext/TaskContext";
import TaskList from "./components/AddTaskForm/TaskList";

function App() {
  const { state } = useContext(TaskContext);

  return (
    <>
      <TaskForm />
      <ul className="todo-ul">
        {state.tasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}

export default App;
