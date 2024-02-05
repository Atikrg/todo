import React, { createContext, useState } from 'react';
import Tasks from '../components/Tasks/tasks.component';

export const TodoContext = createContext({
  tasks: [], // Use an empty array as default value for flexibility
  setTasks: () => {},
});

export const TodoProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TodoContext.Provider value={{tasks, setTasks}}>
        {children}
    </TodoContext.Provider>
  );
};


