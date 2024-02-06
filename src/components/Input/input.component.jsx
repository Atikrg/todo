import React from 'react';
import './input.component.css';
import { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/input.context';


const Input = () => {
    const [input, setInput] = useState("");
    const {tasks, setTasks} = useContext(TodoContext); // <--context should come here
  
    const handleSubmit = (event)=>{
      event.preventDefault();
      if(input === ''){
        alert("Enter tasks")
      }
      
      if(input.length <= 25)
    {
        setTasks([...tasks, input.trim()]);

      }

      setInput("");
      
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