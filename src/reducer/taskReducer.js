/* eslint-disable no-unused-vars */

export const taskReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: payload };

    case "SET_TASKS":
      return { ...state, tasks: [...state.tasks, payload] };

    case "SET_TASK_TO_BE_UPDETED_ID":
      return { ...state, taskToBeUpdetedId: payload };

    case "SET_IS_UPDETING":
      return { ...state, isUpdeting: !state.isUpdeting };

    case "SET_UPDET":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === state.taskToBeUpdetedId)
            return { ...task, task: state.inputValue };
          return task;
        }),
      };

    case "SET_DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };

    case "SET_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === payload)
            return { ...task, isComplete: !task.isComplete };
          return task;
        }),
      };

    default:
      return state;
  }
};
