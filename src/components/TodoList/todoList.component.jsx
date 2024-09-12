import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTaskHandler } from "../../store/tasks/todo.action";

const Todo = (props) => {
  const [isStriked, setStriked] = useState(false);
  const dispatch = useDispatch();

  const handleStrike = () => {
    setStriked(!isStriked);
  };

  const handleDelete = () => {
    dispatch(deleteTaskHandler(props.id)); // Invoke deleteTaskHandler with the task id
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
        onClick={handleStrike} // Handle task strike-through
      >
        {props.text}
      </li>
      <li
        style={{
          listStyleType: "none",
          marginTop: "14px",
        }}
        onClick={handleDelete} // Handle delete
        className="delete"
      >
        X
      </li>
    </div>
  );
};

export default Todo;
