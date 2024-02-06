import React, {useContext, useState } from 'react';
import './tasks.component.css';
import { TodoContext } from '../../contexts/input.context';
import Todo from '../TodoList/todo.component';

const Tasks = () => {
  const {tasks } = useContext(TodoContext);
  console.log(tasks);
/*    */
  
    
  return (
    <div className='tasks__lists'>
      {
        tasks.map((item, index) => {
          return <Todo key= {index} text = {item} />
        })
        }
      <div className='divider'></div>

    </div>
  );
}

export default Tasks;