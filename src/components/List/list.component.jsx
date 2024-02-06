import './list.component.css';
import React, {useState} from 'react';
import { TodoContext } from '../../contexts/input.context';
import { useContext } from 'react';
const List = ({listItem}) => {
    const [isStriked, setStriked] = useState(false);
    const { deleteFromTasks} = useContext(TodoContext);
    const handleStrike = function () {
        setStriked(!isStriked);
      }
    
    const {item} = listItem;

    return (
        <div className='list_tasks'>

        <div
          className='mytask'
          style={{
            textDecoration: isStriked ? 'line-through' : 'none'
          }}
          onClick={handleStrike} // Assuming handleStrike is a function
        >
          {item}
        </div>
        <div /* onClick={()=>deleteFromTasks(item)} */ className='delete'>
          X
        </div>
      </div>
    );
};

export default List;