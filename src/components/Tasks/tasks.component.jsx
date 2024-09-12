import React, { useContext } from 'react';
import './tasks.component.css';
import { TodoContext } from '../../contexts/input.context';
import Todo from "../TodoList/todoList.component";
import { useSelector } from 'react-redux';

const Tasks = () => {

  // ! REACT REDUX CODE

  //? state.tasks.tasks -> The last property tasks which is stat.tasks.{tasks} represent the initial property
  //? state.tasks.tasks -> The last property tasks which is stat.{tasks} represent the rootreducer property

  const tasks = useSelector((state) => state.tasks.tasks)

  // ! CONTEXT API CODE
  //  const {tasks} = useContext(TodoContext);

  return (
    <div className='tasks__lists'>
      {
        tasks.map((item, index) => {
          return <Todo key={index} text={item} id={index} />
        })
      }
      <div className='divider'></div>

    </div>
  );
}

export default Tasks;