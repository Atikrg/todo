import React, { createContext, useState, useMemo, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';
import PropTypes from 'prop-types';
/* ?  export const TodoContext = createContext({
  tasks: [], // Use an empty array as default value for flexibility
  setTasks: ()=>{}
});


export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    // Add more tasks as needed
  ]);

  const value = useMemo(()=>({
    tasks, 
    setTasks
  }), [tasks]);

 
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
 */

/*--------------------*/

const INITIAL_STATE = {
  tasks: []
}

/* const deleteTask = (i) => {
  let copyTask = [...tasks];
  copyTask.splice(i, 1);
  setTasks(copyTask);
};
 */
const TODO_ACTION_TYPES = {
  SET_TASK : 'SET_TASK',
  DELETE_TASK : 'DELETE_TASK'
}

const taskReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch(type){
    case TODO_ACTION_TYPES.SET_TASK:
      return {
        ...state,
        tasks:[...state.tasks, payload]
      }
    case TODO_ACTION_TYPES.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((tasks, index)=> index !== payload)
      }

      
    default: 
        throw new Error(`${type} is unhandlled`)
  }
};

export const TodoContext = createContext({
  tasks: [],
  setTasks: () =>{},
  deleteTask: () =>{}
});



export const TodoProvider = ({children}) =>{
  const [{tasks}, dispatch] = useReducer(taskReducer, INITIAL_STATE);

  const deleteTaskHandler = index => {
    dispatch(createAction(TODO_ACTION_TYPES.DELETE_TASK, index));
  };

  const addTaskHandler = task =>{
    dispatch(createAction( TODO_ACTION_TYPES.SET_TASK,task));
  }

  const value = {
    tasks,
    addTask:addTaskHandler,
    deleteTask: deleteTaskHandler,
    dispatch
  }
  return(
    <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired
};


