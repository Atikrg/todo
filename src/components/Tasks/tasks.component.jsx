import React, {useContext} from 'react';
import './tasks.component.css';
import{ TodoContext } from '../../contexts/input.context';
import Todo from "../TodoList/todoList.component";

const Tasks = () => {
  const {tasks} = useContext(TodoContext);

  return (
    <div className='tasks__lists'>
      {
        tasks.map((item, index) => {
          return <Todo key = {index} text = {item} id = {index} />
        })
        }
      <div className='divider'></div>

    </div>
  );
}

export default Tasks;