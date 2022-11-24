import React from 'react';
import './App.css';
import TodoField from './components/TodoField';
import React, {useState} from 'react';
import Yapılacaklar from './components/Yapılacaklar';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      name:"GYM",
      status:false,
    },
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
