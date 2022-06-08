import React from 'react'
import {FaEdit,FaTrash} from "react-icons/fa"
import { useDispatch } from 'react-redux';

const TodoItem = ({id,name,checked}) => {
    const dispatch=useDispatch();

  return (
    <div onClick={()=>dispatch({type:"Checked",payload:id})} className={`todoItem ${checked ? "active" : ""}`}>
            <h3>{name}</h3>
            <div className="btns">
                <button onClick={(e)=>{
                    e.stopPropagation();
                    dispatch({type:"Edit",payload:[name,id,checked]})
                }} 
                className='edit'><FaEdit/></button>
                <button onClick={()=>dispatch({type:"Delete",payload:id})} className='delete'><FaTrash/></button>
            </div>
        </div>
  )
}

export default TodoItem