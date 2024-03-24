import './input.component.css';
import React, { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/input.context';


const Input = () => {
    const [input, setInput] = useState("");
   /*  const {tasks, setTasks} = useContext(TodoContext); */ // <--context should come here
    const {dispatch} = useContext(TodoContext);
    
    const handleSubmit = (event)=>{
      event.preventDefault();
      if(input === ''){
        alert("Enter tasks")
        return;
      }
      
      if(input.length <= 25)
      {
        dispatch({
          type: 'SET_TASK',
          payload: input.trim()
        });
        // setTasks([...tasks, input.trim()]);
        setInput('');

      }else{
        alert("length should be less than 25");
        setInput('')
      }
      
    }

    return (
   
      <form onSubmit = {handleSubmit}>
            <input
            name = "text"
            onChange={(e)=>setInput((e.target.value))}
            value={input}
            className='input_todo'
            type='text'
            placeholder='Enter todo'/>
            <button type="submit" className='add-btn'>+</button>
        </form>
    );
};

export default Input;