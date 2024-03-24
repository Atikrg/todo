import React, { useState, useContext } from "react";
import { TodoContext } from "../../contexts/input.context";

const Todo = (props) => {
  const [isStriked, setStriked] = useState(false);

  const { tasks, setTasks, dispatch } = useContext(TodoContext);
  const handleStrike = function () {
    setStriked(!isStriked);
  };

  const deleteHandlerTask = () => {
    /* let copyTask = [...tasks];
    copyTask.splice(i, 1);
    setTasks(copyTask); */
    console.log(props.id)
    dispatch({
      type: 'DELETE_TASK',
      payload: props.id
    })
  };

  return (
    <div className="list_tasks">
      <li
        className="mytask"
        style={{
          textDecorationColor: "black",
          listStyleType: "none",
          textDecoration: isStriked ? "line-through" : "none",
        }}
        onClick={handleStrike} // Assuming handleStrike is a function
      >
        {props.text}
      </li>
      <li
        style={{
          listStyleType: "none",
          marginTop: "14px",
        }}
        onClick={() => {
          deleteHandlerTask()

        }}
        className="delete"
      >
        X
      </li>
    </div>
  );
};

export default Todo;
