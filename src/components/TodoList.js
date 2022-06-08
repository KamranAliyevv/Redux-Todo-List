import React from 'react'
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const {data}=useSelector(state=>state);

  return (
    <div className='todoList'>
        {data.length>0 ? 
        data.map((item,index)=>{
            return(<TodoItem id={item.id} key={index} name={item.name} checked={item.checked} />)
        })
        : <p>Sebet bosdur</p>
        }
    </div>
  )
}

export default TodoList