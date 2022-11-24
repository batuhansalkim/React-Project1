import React from 'react'

const Yapılacaklar = ({todos}) => {
  return todos.length > 0 ? ( 
        <ul className='todos'>
            {
              todos.map(todo => 
                <li key={todo.id} className='todos__item'>
                    <span className='todos__text'>{todo.name}</span>
                    <div className='todos__buttons'>
                        <a href="#">✅</a>
                        <a href="#">❌</a>
                    </div>
                </li>)
            }
        </ul>
  ):null;
};

export default Yapılacaklar