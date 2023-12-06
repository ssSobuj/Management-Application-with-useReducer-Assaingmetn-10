/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdMovieEdit } from "react-icons/md";
import { TbTrashOff } from "react-icons/tb";
import { TaskContext } from "../../taskContext/TaskContext";
import { createDispatch } from "../../utils/createDispatch";

export default function TaskList({ task: { task, id, isComplete } }) {
  const { dispatch, state } = useContext(TaskContext);

  const handleDelete = (id) => {
    dispatch(createDispatch("SET_DELETE_TASK", id));
  };

  const completeHadler = (id) => {
    dispatch(createDispatch("SET_COMPLETE", id));
  };

  const handelEdit = (id,task) => {
    dispatch(createDispatch("SET_INPUT_VALUE",task));
    dispatch(createDispatch("SET_TASK_TO_BE_UPDETED_ID", id));
    dispatch(createDispatch("SET_IS_UPDETING"));
  };
  return (
    <>
      <li>
        
        <div className="list">
          <div className="chek">
            <span onClick={() => completeHadler(id)}>
              <input className="checkbox" type="checkbox" />
            </span>
          </div>
          <p
            style={{ textDecoration: isComplete && "line-through" }}
            className="todos-p"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;{task}&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <span onClick={() => handelEdit(id,task)} className="span chek">
            <MdMovieEdit />
          </span>
          <span onClick={() => handleDelete(id)} className="span chek">
            <TbTrashOff />
          </span>
        </div>
        {/* <hr /> */}
      </li>
    </>
  );
}
