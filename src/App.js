import React,{useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo';

const style={
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CBE50]`
}

const App=()=>{
   const [todos,setTodos]=useState(['Do something','Do another thing']);
   return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.header}>Todo app</h3>
        <form className={style.form}>
          <input type="text" placeholder='Add a todo' className={style.input}/>
          <button className={style.button}><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {todos.map((todo,index)=>{
            return (
              <Todo 
                 key={index}
                 todo={todo}
              />
            )
          })}
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </div>
   )
}

export default App
