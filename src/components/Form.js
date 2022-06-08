import React from 'react'
import { FaPlusSquare } from 'react-icons/fa';
import {useDispatch,useSelector} from "react-redux";

const Form = () => {
  
  const dispatch= useDispatch();
  let inputData=useSelector(state=>state.inputValue);
  function addItem(e){
    e.preventDefault();
    if(inputData.value.trim().length > 0){
    !inputData.isEdited.length>0 ?
    dispatch({
      type:"Submit",
      payload:{
        id:new Date(),
        name:inputData.value,
        checked:false
      }
    })
    :
    dispatch({
      type:"Editing",
      payload:{
        id:inputData.isEdited,
        name:inputData.value,
        checked:inputData.checked
      }
    })
    dispatch({
      type:"Empty"
    })
  
   } else{console.log("error")}
  }
  return (
    <form id="todoForm" onSubmit={addItem}>
        <div className="form-item">
        <input onChange={(e)=>dispatch({type:"Change",payload:e.target.value})} value={inputData.value} type="text" placeholder="Enter The Work" />
        <button className="todo_button">
            <FaPlusSquare/>
        </button>
        </div>
        {/* <div className="select">
            <select name="todos" className="filter_todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div> */}
    </form>
  )
}

export default Form