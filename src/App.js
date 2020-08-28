import React, { useState } from 'react';
import './App.css';
import { InputLabel, FormControl, Input, Button } from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState(['Take dog for a walk', 'Throw out rubbish'])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input value={input} onChange={e => setInput(e.target.value)}/>
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        ADD TODO
      </Button>
  
      <form>
      
      </form>


      <ul>
        { todos.map(todo => (
          <li>{ todo }</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
