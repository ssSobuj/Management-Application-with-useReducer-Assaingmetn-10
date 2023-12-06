import { useContext } from "react";
import "./TaskForm.css";
import { TaskContext } from "../../taskContext/TaskContext";
import { createDispatch } from "../../utils/createDispatch";

export default function TaskForm() {
  const { state, dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task: state.inputValue,
      isComplete: false,
      id: Date.now(),
    };
    if (taskObj.task.trim() !== "") {
      dispatch(createDispatch("SET_TASKS", taskObj));
      dispatch(createDispatch("SET_INPUT_VALUE", ""));
    } else {
      alert("Please give some text");
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(createDispatch("SET_UPDET"));
    dispatch(createDispatch("SET_IS_UPDETING"));
    dispatch(createDispatch("SET_INPUT_VALUE", ""));
  };
  const handleChange = (e) => {
    dispatch(createDispatch("SET_INPUT_VALUE", e.target.value));
  };

  return (
    <div>
      <div className="container">
        <form
          className="input-sec"
          onSubmit={state.isUpdeting ? handleUpdate : handleSubmit}
        >
          <input
            type="text"
            maxLength={42}
            name="text"
            value={state.inputValue}
            onChange={handleChange}
            placeholder="Write a new task"
          />
          <button
            disabled={
              state.inputValue.trim() === ""
            }
          className="add-todo">
            {!state.isUpdeting ? "Add Task" : "Update Task"}
          </button>
        </form>
      </div>
    </div>
  );
}
