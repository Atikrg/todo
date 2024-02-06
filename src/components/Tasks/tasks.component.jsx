import React, {useContext } from 'react';
import './tasks.component.css';
import { TodoContext } from '../../contexts/input.context';
import List from '../List/list.component';

const Tasks = () => {
  const {tasks } = useContext(TodoContext);
  console.log(tasks);
    
  return (
    <form className="tasks__lists">
      {
        tasks.map(({item, index}) => (
         <List key={index} listItem = {item}/>
         ))
        }
        <br></br>
      <div className='divider'></div>
    </form>
  );
}

export default Tasks;