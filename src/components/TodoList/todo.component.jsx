import React, {useState, useContext} from 'react';
import { TodoContext } from '../../contexts/input.context';
const Todo = (props) => {

    const [isStriked, setStriked] = useState(false);
  const { deleteFromTasks} = useContext(TodoContext);

    const handleStrike = function () {
      setStriked(!isStriked);
    }
    return (
        
        <div className='list_tasks'>
        <li
          className='mytask'
          style={{
            listStyleType: 'none',
            textDecoration: isStriked ? 'line-through' : 'none'
          }}
           onClick={handleStrike} // Assuming handleStrike is a function
        >
          {props.text}
        </li>
        <li style={{
          listStyleType: 'none',
          marginTop: '14px'
          
          }} onClick={()=>deleteFromTasks(props.item)}  className='delete'>
          X
        </li>
      </div>
    );
};

export default Todo;