import React, { useState } from 'react'
import './TodoPage.css'
import Todo from '../../components/Tile/Todo/Todo'

function TodoPage(){

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')

    function handleTodo(e){
        setTodo(e.target.value)
    }

    function handleAddTodo(){
        setTodos((value)=>{
            return[...value,{
                title: todo,
                status: 'pending'
            }]
        })
        setTodo('')
    }

    function handleDeleteTodo(e){
        setTodos((value)=>{
            return todos.filter((todo,i)=> todo.title !== e )
        })
    }

    function handleCheckChange(){
        setTodos((val)=>{
            return val.map((todo,index)=>{
                if(todo.title == e){
                    return(
                        ...todo,
                        status: todo.status == 
                    )
                }
            })
        })
    }


    return(
        <div>
            <div>
                <input type='text' onChange={handleTodo} value={todo}></input>
                <button onClick={handleAddTodo}>Submit</button>
            </div>
            {
                todos.map((todo, index)=>{
                    return <Todo key={index} todo={todo} onCheckChange={handleAddTodo=>}onDelete={()=>handleDeleteTodo(todo.title)}/>
                }
            )
        }
        </div>
    )
}

export default TodoPage