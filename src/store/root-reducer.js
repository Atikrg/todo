import { combineReducers } from "redux";

import { taskReducer } from "./tasks/todo.reducer";

export const rootReducer = combineReducers({
      tasks: taskReducer
})