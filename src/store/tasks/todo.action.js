import { TODO_ACTION_TYPES } from "./todo.types";
import { createAction } from "../../utils/reducer/reducer.utils";


// ? REDUX CODE
export const deleteTaskHandler = index => {
      return createAction(TODO_ACTION_TYPES.DELETE_TASK, index);
};

export const addTaskHandler = task => {
      return createAction(TODO_ACTION_TYPES.SET_TASK, task);
}


// ? FOR CONTEXT API
/* export const deleteTaskHandler = index => {
      dispatch(createAction(TODO_ACTION_TYPES.DELETE_TASK, index));
};

export const addTaskHandler = task => {
      dispatch(createAction(TODO_ACTION_TYPES.SET_TASK, task));
} */