import React from 'react';
import './App.css';
import TodoField from './components/TodoField';
import {useState} from 'react';
import Yapılacaklar from './components/Yapılacaklar';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      name:"React Calis",
      status:false,
    },
    {
      id:2,
      name:"JS Calis",
      status:true,
    }
  ]);
  

  return(
    <div className='app'>
      <h1>ToDo List</h1>
      <TodoField/>
    
      <Yapılacaklar todos={todos}/>
    </div>
  );

}

export default App;
