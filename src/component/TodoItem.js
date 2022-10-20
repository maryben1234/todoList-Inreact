import React from 'react'
import {RiCloseCircleFill} from "react-icons/ri"
import {BsCheck2Circle} from "react-icons/bs"

function TodoItem(props) {
    const {todo, removeTodo , completeTodo} = props;


  return (
    <div className={todo.completed ?"todo-row complete": "todo-row"}>
        {todo.text}
        <div className='iconsContainer'>
        <RiCloseCircleFill className='icon' style={{marginRight:"5"}} onClick={ () =>removeTodo(todo.id)}/>
        <BsCheck2Circle onClick={()=> completeTodo(todo.id)}/>
        </div>
    </div>
  ) 
}

export default TodoItem