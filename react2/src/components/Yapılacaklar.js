import React from 'react'

const Yapılacaklar = ({todos}) => {
  return todos.length > 0 ? ( 
        <ul className='todos'>
            {
              todos.map(todo => 
                <li key={todo.id} className='todos__item'>
                    <span className={todo.status ? "todos__text todos__text--done":"todos__text"}>{todo.name}</span>
                    <div className='todos__buttons'>
                          <button disabled={todo.status} href="#">✅</button>
                          <button href="#">❌</button>
                    </div>
                </li>)
            }
        </ul>
  ):null;
};

export default Yapılacaklar