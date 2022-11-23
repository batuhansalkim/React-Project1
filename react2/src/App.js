import React from 'react';
import './App.css';
import TodoField from './components/TodoField';
import { Todos   } from './components/Todos';
function App() {
  
  

  return(
    <div className='app'>
      <h1>ToDo List</h1>
      <TodoField/>
      <Todos />
    </div>
  );

}

export default App;
