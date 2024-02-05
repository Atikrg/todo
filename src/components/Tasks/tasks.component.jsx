import React, {useState, useContext } from 'react';
import './tasks.component.css';
import {TodoContext } from '../../contexts/input.context';

const Tasks = () => {
  const {tasks} = useContext(TodoContext);
  const [isStriked , setStriked] = useState(false);
 

    const handleStrike = function(){
        setStriked(!isStriked);
    }
    return (
  <form className="tasks__lists">
        {
             
        tasks.map((item, index) => (
          <div key={index}>
      
            <div
            className='mytask'
              style={{
                textDecoration: isStriked ? 'line-through' : 'none'
              }}
              onClick={handleStrike} // Assuming handleStrike is a function
            >
              {item}
            </div>
            <div className='divider'></div>
          </div>
        ))  
            }
      </form> 
    );
  }

export default Tasks;