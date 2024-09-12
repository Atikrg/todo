import { TODO_ACTION_TYPES } from "./todo.types";

const INITIAL_STATE = {
      tasks: []
}

export const taskReducer = (state = INITIAL_STATE, action) => {
      const { type, payload } = action;
      switch (type) {
            case TODO_ACTION_TYPES.SET_TASK:
                  return {
                        ...state,
                        tasks: [...state.tasks, payload]
                  }
            case TODO_ACTION_TYPES.DELETE_TASK:
                  return {
                        ...state,
                        tasks: state.tasks.filter((tasks, index) => index !== payload)
                  }


            default:
                  return state;
      }
};