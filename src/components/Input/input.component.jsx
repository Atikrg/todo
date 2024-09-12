import './input.component.css';
import React, { useState, useContext } from 'react';
// ! CONTEXT CODE 
import { TodoContext } from '../../contexts/input.context';
import { useDispatch } from 'react-redux';
import { addTaskHandler } from '../../store/tasks/todo.action';


const Input = () => {
  const [input, setInput] = useState("");
  /* do not uncomment this  const {tasks, setTasks} = useContext(TodoContext); */ // <--context should come here

  // ! REDUX API CODE
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === '') {
      alert("Enter tasks")
      return;
    }

    if (input.length <= 25) {
      dispatch(addTaskHandler(input.trim()));
      // setTasks([...tasks, input.trim()]);
      setInput('');

    } else {
      alert("length should be less than 25");
      setInput('')
    }

  }


  // ! CONTEXT API CODE
  // const {dispatch} = useContext(TodoContext);

  /* const handleSubmit = (event)=>{
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
*/
  return (

    <form onSubmit={handleSubmit}>
      <input
        name="text"
        onChange={(e) => setInput((e.target.value))}
        value={input}
        className='input_todo'
        type='text'
        placeholder='Enter todo' />
      <button type="submit" className='add-btn'>+</button>
    </form>
  );
};

export default Input;