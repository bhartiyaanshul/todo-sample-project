import React from 'react'
import './Todo.css'

function Todo({todo, onDelete, onCheckChange}){
    <div>
        <input type='checkbox' checked={todo.status !== 'pending'} onClick={onCheckChange}></input>
        <div className={`todo.title ${todo.status}`}>{todo.title}</div>
        <button className='delete-button' onClick={onDelete}>Delete</button>
    </div>
}

export default Todo